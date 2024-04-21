import { transformComment } from '@graphql-codegen/visitor-plugin-common';
import {
    GraphQLSchema,
    ASTNode,
    FieldDefinitionNode,
    Kind,
    ObjectTypeDefinitionNode,
    TypeNode,
    InputObjectTypeDefinitionNode,
    InputValueDefinitionNode,
    UnionTypeDefinitionNode,
    InterfaceTypeDefinitionNode,
    ConstValueNode, NonNullTypeNode,
} from 'graphql';
import { Config } from './config.js';
import { ListTypeNode, NamedTypeNode } from "graphql/language/ast.js";

// The fork of https://github.com/dotansimha/graphql-code-generator/blob/e1dc75f3c598bf7f83138ca533619716fc73f823/packages/plugins/typescript/resolvers/src/visitor.ts#L85-L91
function clearOptional(str: string): string {
    if (str.startsWith('Maybe')) {
        return str.replace(/Maybe<(.*?)>$/u, '$1');
    }
    return str;
}

// The fork of https://github.com/dotansimha/graphql-code-generator/blob/ba84a3a2758d94dac27fcfbb1bafdf3ed7c32929/packages/plugins/other/visitor-plugin-common/src/base-visitor.ts#L422
function convertName(node: ASTNode | string, config: Config): string {
    let convertedName = '';
    convertedName += config.typesPrefix;
    convertedName += config.convert(node);
    convertedName += config.typesSuffix;
    return convertedName;
}

function isTypeBasedOnUserDefinedType(node: TypeNode, userDefinedTypeNames: string[]): boolean {
    if (node.kind === Kind.NON_NULL_TYPE) {
        return isTypeBasedOnUserDefinedType(node.type, userDefinedTypeNames);
    } else if (node.kind === Kind.LIST_TYPE) {
        return isTypeBasedOnUserDefinedType(node.type, userDefinedTypeNames);
    } else {
        return userDefinedTypeNames.includes(node.name.value);
    }
}

function parseTypeNode(node: TypeNode, config: Config): string {
    if (node.kind === Kind.NON_NULL_TYPE) {
        return clearOptional(parseTypeNode(node.type, config));
    } else if (node.kind === Kind.LIST_TYPE) {
        return `Maybe<${parseTypeNode(node.type, config)}[]>`;
    } else {
        return `Maybe<Optional${convertName(node.name.value, config)}>`;
    }
}

type ValuePrimitive = string | number | boolean | null;
type ValueArray = ValuePrimitive[];
type ValueObject = Record<string, ValuePrimitive | ValueArray>;

function valueOf(value: ConstValueNode): ValuePrimitive | ValueArray | ValueObject {
    // object
    if (value.kind === Kind.OBJECT) {
        return value.fields.reduce((acc, field) => {
            // @ts-expect-error TODO: nesting type
            acc[field.name.value] = valueOf(field.value)
            return acc
        }, {} as ValueObject)
    }
    // list
    if (value.kind === Kind.LIST) {
        return value.values.map(v => {
            return valueOf(v)
        }) as ValueArray
    }
    // null
    if (value.kind === Kind.NULL) {
        return null
    }
    // string
    if (value.kind === Kind.STRING) {
        return value.value
    }
    // enum
    if (value.kind === Kind.ENUM) {
        return value.value
    }
    // int
    if (value.kind === Kind.INT) {
        return Number.parseInt(value.value, 10)
    }
    // float
    if (value.kind === Kind.FLOAT) {
        return Number.parseFloat(value.value)
    }
    // boolean
    if (value.kind === Kind.BOOLEAN) {
        return value.value
    }
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    throw new Error(`Unknown kind of value ${value satisfies never}`)
}

export type FakerDirective = {
    methodName: string
    options: Record<string, any>
} | {
    function: string
}

function parseFieldOrInputValueDefinition(
    node: FieldDefinitionNode | InputValueDefinitionNode,
    convertedTypeName: string,
    config: Config,
    userDefinedTypeNames: string[],
): { typeString: string; comment: string | undefined, faker?: FakerDirective | undefined } {
    const comment = node.description ? transformComment(node.description) : undefined;
    const fakerDirective = node.directives?.find(d => d.name.value.startsWith("faker_"));
    // fake
    const faker = ((): FakerDirective | undefined => {
        if (!fakerDirective) {
            const typeToFunction = (type: string): string => {
                switch (type) {
                    case "String":
                        return "faker.word.sample()"
                    case "Int":
                        return "faker.number.int()"
                    case "Float":
                        return "faker.number.float()"
                    case "Boolean":
                        return "faker.random.boolean()"
                    case "ID":
                        return "faker.string.uuid()"
                    default:
                        return `get${convertedTypeName}Factory().build()` // TODO: add new type to FakerDirective?
                }
            }
            const typeToFunctionWithArray = (type: string): string => {
                switch (type) {
                    case "String":
                        return `faker.helpers.arrayElements(Array.from({ length: 10 }).map(() => ${typeToFunction(type)}))`
                    case "Int":
                        return `faker.helpers.arrayElements(Array.from({ length: 10 }).map(() => ${typeToFunction(type)}))`
                    case "Float":
                        return `faker.helpers.arrayElements(Array.from({ length: 10 }).map(() => ${typeToFunction(type)}))`
                    case "Boolean":
                        return `faker.helpers.arrayElements(Array.from({ length: 10 }).map(() => ${typeToFunction(type)}))`
                    case "ID":
                        return `faker.helpers.arrayElements(Array.from({ length: 10 }).map(() => ${typeToFunction(type)}))`
                    default:
                        return `get${convertedTypeName}Factory().buildList(10)`
                }
            }
            // NamedType/ListType handling
            const nodeToFunction = (node: NonNullTypeNode | NamedTypeNode | ListTypeNode, isArray = false): {
                function: string
            } => {
                if (node.kind === "NonNullType") {
                    return nodeToFunction(node.type, isArray);
                } else if (node.kind === "NamedType") {
                    if (isArray) {
                        return {
                            function: typeToFunctionWithArray(node.name.value)
                        }
                    } else {
                        return {
                            function: typeToFunction(node.name.value)
                        }
                    }
                } else if (node.kind === "ListType") {
                    return nodeToFunction(node.type, true)
                }
                throw new Error("Unknown node kind")
            }
            // basic graphql scalar
            return nodeToFunction(node.type);
        }
        if (!fakerDirective) {
            return undefined
        }
        if (!fakerDirective.arguments) {
            return {
                methodName: fakerDirective.name.value.replace(/_/g, "."),
                options: {}
            }
        }
        /**
         * @efaker_[method_name](args)
         */
        return {
            methodName: fakerDirective.name.value.replace(/_/g, "."),
            options: fakerDirective.arguments.reduce((acc, arg) => {
                if (arg.name.value.startsWith("faker_")) {
                    return acc
                }
                acc[arg.name.value] = valueOf(arg.value)
                return acc
            }, {} as Record<string, any>)

        }
    })();
    if (isTypeBasedOnUserDefinedType(node.type, userDefinedTypeNames)) {
        return { typeString: `${parseTypeNode(node.type, config)} | undefined`, comment, faker };
    } else {
        return { typeString: `${convertedTypeName}['${node.name.value}'] | undefined`, comment, faker };
    }
}

function parseObjectTypeOrInputObjectTypeDefinition(
    node: ObjectTypeDefinitionNode | InputObjectTypeDefinitionNode,
    config: Config,
    userDefinedTypeNames: string[],
    getAbstractTypeNames: (type: ObjectTypeDefinitionNode) => string[],
): ObjectTypeInfo {
    const originalTypeName = node.name.value;
    const convertedTypeName = convertName(originalTypeName, config);
    const comment = node.description ? transformComment(node.description) : undefined;
    const abstractTypeNames = node.kind === Kind.OBJECT_TYPE_DEFINITION ? getAbstractTypeNames(node) : [];
    return {
        type: 'object',
        name: convertedTypeName,
        fields: [
            ...(!config.skipTypename ? [{ name: '__typename', typeString: `'${originalTypeName}'` }] : []),
            ...(!config.skipIsAbstractType
                ? abstractTypeNames.map((name) => ({ name: `__is${name}`, typeString: `'${originalTypeName}'` }))
                : []),
            ...(node.fields ?? []).map((field) => ({
                name: field.name.value,
                ...parseFieldOrInputValueDefinition(field, convertedTypeName, config, userDefinedTypeNames),
            })),
        ],
        comment,
    };
}

type FieldInfo = {
    name: string; typeString: string; comment?: string | undefined;
    faker?: FakerDirective | undefined;
}
export type ObjectTypeInfo = {
    type: 'object';
    name: string;
    fields: FieldInfo[];
    comment?: string | undefined;
};
export type AbstractTypeInfo = {
    type: 'abstract';
    name: string;
    possibleTypes: string[];
    comment?: string | undefined;
    faker?: FakerDirective | undefined
};
export type TypeInfo = ObjectTypeInfo | AbstractTypeInfo;

export function getTypeInfos(config: Config, schema: GraphQLSchema): TypeInfo[] {
    const types = Object.values(schema.getTypeMap());

    const userDefinedTypeDefinitions = types
        .map((type) => type.astNode)
        .filter(
            (
                node,
            ): node is
                | ObjectTypeDefinitionNode
                | InputObjectTypeDefinitionNode
                | InterfaceTypeDefinitionNode
                | UnionTypeDefinitionNode => {
                if (!node) return false;
                return (
                    node.kind === Kind.OBJECT_TYPE_DEFINITION ||
                    node.kind === Kind.INPUT_OBJECT_TYPE_DEFINITION ||
                    node.kind === Kind.INTERFACE_TYPE_DEFINITION ||
                    node.kind === Kind.UNION_TYPE_DEFINITION
                );
            },
        );
    const objectTypeDefinitions = userDefinedTypeDefinitions.filter((node): node is ObjectTypeDefinitionNode => {
        if (!node) return false;
        return node.kind === Kind.OBJECT_TYPE_DEFINITION;
    });
    const unionTypeDefinitions = types
        .map((type) => type.astNode)
        .filter((node): node is UnionTypeDefinitionNode => {
            if (!node) return false;
            return node.kind === Kind.UNION_TYPE_DEFINITION;
        });

    function getAbstractTypeNames(type: ObjectTypeDefinitionNode): string[] {
        const interfaceNames = (type.interfaces ?? []).map((i) => i.name.value);
        const unionNames = unionTypeDefinitions
            .filter((union) => (union.types ?? []).some((member) => member.name.value === type.name.value))
            .map((union) => union.name.value);
        return [...interfaceNames, ...unionNames];
    }

    const userDefinedTypeNames = userDefinedTypeDefinitions.map((node) => node.name.value);

    return types
        .map((type) => type.astNode)
        .filter(
            (
                node,
            ): node is
                | ObjectTypeDefinitionNode
                | InputObjectTypeDefinitionNode
                | InterfaceTypeDefinitionNode
                | UnionTypeDefinitionNode => {
                if (!node) return false;
                return (
                    node.kind === Kind.OBJECT_TYPE_DEFINITION ||
                    node.kind === Kind.INPUT_OBJECT_TYPE_DEFINITION ||
                    node.kind === Kind.INTERFACE_TYPE_DEFINITION ||
                    node.kind === Kind.UNION_TYPE_DEFINITION
                );
            },
        )
        .map((node) => {
            if (node?.kind === Kind.OBJECT_TYPE_DEFINITION || node?.kind === Kind.INPUT_OBJECT_TYPE_DEFINITION) {
                return parseObjectTypeOrInputObjectTypeDefinition(node, config, userDefinedTypeNames, getAbstractTypeNames);
            } else if (node?.kind === Kind.INTERFACE_TYPE_DEFINITION) {
                return {
                    type: 'abstract',
                    name: convertName(node.name.value, config),
                    possibleTypes: objectTypeDefinitions
                        .filter((objectTypeDefinitionNode) =>
                            (objectTypeDefinitionNode.interfaces ?? []).some((i) => i.name.value === node.name.value),
                        )
                        .map((objectTypeDefinitionNode) => convertName(objectTypeDefinitionNode.name.value, config)),
                    comment: node.description ? transformComment(node.description) : undefined,
                };
            } else {
                return {
                    type: 'abstract',
                    name: convertName(node.name.value, config),
                    possibleTypes: (node.types ?? []).map((type) => convertName(type.name.value, config)),
                    comment: node.description ? transformComment(node.description) : undefined,
                };
            }
        });
}
