import { Config } from './config.js';
import {
    ExampleDirectiveFake,
    ExampleDirectivePattern,
    ExampleDirectiveValues,
    ObjectTypeInfo,
    TypeInfo
} from './schema-scanner.js';
import "@faker-js/faker"
function generatePreludeCode(config: Config, typeInfos: TypeInfo[]): string {
    const joinedTypeNames = typeInfos
        .filter(({ type }) => type === 'object')
        .map(({ name }) => `  ${name}`)
        .join(',\n');
    const code = `
import {
  type DefineTypeFactoryInterface${config.nonOptionalDefaultFields ? 'Required' : ''},
  defineTypeFactory,
} from '@mizdra/graphql-codegen-typescript-fabbrica/helper';
import type {
  Maybe,
${joinedTypeNames},
} from '${config.typesFile}';

export * from '@mizdra/graphql-codegen-typescript-fabbrica/helper';
  `.trim();
    return `${code}\n`;
}

export function generateOptionalTypeDefinitionCode(typeInfo: TypeInfo): string {
    if (typeInfo.type === 'object') {
        const { name, fields } = typeInfo;
        const comment = typeInfo.comment ?? '';
        const joinedPropDefinitions = fields
            .map((field) => {
                const comment = field.comment ? `  ${field.comment}` : '';
                return `${comment}  ${field.name}?: ${field.typeString};`;
            })
            .join('\n');
        return `
${comment}export type Optional${name} = {
${joinedPropDefinitions}
};
`.trimStart();
    } else {
        const { name, possibleTypes } = typeInfo;
        const comment = typeInfo.comment ?? '';
        const joinedPossibleTypes = possibleTypes.map((type) => `Optional${type}`).join(' | ');
        return `
${comment}export type Optional${name} = ${joinedPossibleTypes};
`.trimStart();
    }
}

function generateTypeFactoryCode({ nonOptionalDefaultFields }: Config, typeInfo: ObjectTypeInfo): string {
    const { name } = typeInfo;
    return `
/**
 * Define factory for {@link ${name}} model.
 *
 * @param options
 * @returns factory {@link ${name}FactoryInterface}
 */
export const define${name}Factory: DefineTypeFactoryInterface${nonOptionalDefaultFields ? 'Required' : ''}<
  Optional${name},
  {}
> = defineTypeFactory;
`.trimStart();
}

// export type ExampleDirectiveFake = {
//   fake: {
//     type: string
//     lang: string
//   }
// };
// export type ExampleDirectivePattern = {
//   pattern: string
// };
// export type ExampleDirectiveValues = {
//   values: (ValuePrimitive | ValueArray | ValueObject)[]
// };
const handleFake = (example: ExampleDirectiveFake) => {
    return `faker.${example.fake.type}()`;
};
const handlePattern = (example: ExampleDirectivePattern) => {
    return `faker.random.alphaNumeric(${example.pattern.length})`;
}
const handleValues = (example: ExampleDirectiveValues) => {
    return `faker.random.arrayElement(${example.values.map((value) => value).join(', ')})`;
}
const handleExample = (example: ExampleDirectiveFake | ExampleDirectivePattern | ExampleDirectiveValues) => {
    if ('fake' in example) {
        return handleFake(example);
    } else if ('pattern' in example) {
        return handlePattern(example);
    } else if ('values' in example) {
        return handleValues(example);
    }
    throw new Error('Unknown example directive');
}

export function generateDefaultFactory(_: Config, typeInfo: ObjectTypeInfo): string {
    const { name } = typeInfo;
    return `
/**
 * Factory for {@link ${name}} model.
 */
export const ${name}Factory = define${name}Factory({
  defaultFields: {
    ${typeInfo.fields
        // name: dynamic(() => faker.name.findName()),
        .flatMap(({ name,example }) => {
            if(!example) {
                return [];
            }
            return [`${name}: dynamic(() => ${handleExample(example)})`];
        })
        .join(',\n')}
  },
});`.trimStart();
}

export function generateCode(config: Config, typeInfos: TypeInfo[]): string {
    let code = '';
    code += generatePreludeCode(config, typeInfos);
    code += '\n';
    for (const typeInfo of typeInfos) {
        code += generateOptionalTypeDefinitionCode(typeInfo);
        code += '\n';
        if (typeInfo.type === 'object') {
            code += generateTypeFactoryCode(config, typeInfo);
            code += '\n';
            code += generateDefaultFactory(config, typeInfo);
            code += '\n';
        }
    }
    return code;
}
