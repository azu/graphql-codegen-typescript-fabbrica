import { finance } from "./finance.js";

type GraphQLBasicScalar = "String" | "Boolean" | "Int" | "Float" | "ID";
type DirectiveInfo = {
    name: string;
    moduleName: string;
    options: Record<string, {
        optional: boolean;
        description: string;
        type: GraphQLBasicScalar;
    }>;
}
const generateDirective = (info: DirectiveInfo): string => {
    /**
     *
     * directive @faker_finance_maskedNumber(
     *   """
     *   length?: number = 4
     *   """
     *   length: Int
     *
     *   """
     *   parens?: boolean = true
     *   """
     *   parens: Boolean
     *
     *   """
     *   ellipsis?: boolean = true
     *   """
     *   ellipsis: Boolean
     * ) on FIELD_DEFINITION
     */
    const stripHTML = (html: string) => {
        // in node.js
        return html.replace(/<[^>]*>?/gmu, '');
    }
    const options = Object.entries(info.options).map(([key, value]) => {
        return `  """\n  ${stripHTML(value.description.trim())}\n  """
  ${key}: ${value.type}${value.optional ? "" : "!"}`;
    }).join("\n");
    const optionsWithPadding = options ? `(\n${options}\n)` : "";
    return `directive @faker_${info.moduleName}_${info.name}${optionsWithPadding} on FIELD_DEFINITION`;
}

type FakeAPIDefinition = {
    name: string;
    description: string;
    parameters: {
        name: string;
        type: string;
        default?: string;
        description: string;
    }[];
}
const parametersToOptions = (parameters: FakeAPIDefinition["parameters"]): DirectiveInfo["options"] => {
    const options = new Map<string, {
        optional: boolean;
        description: string;
        type: GraphQLBasicScalar;
    }>();
    parameters.forEach((parameter) => {
        // ignore object type
        if (parameter.type === "{ ... }") {
            return;
        }
        // TODO: union |  is not supported yet
        if (parameter.type.includes("|")) {
            return;
        }
        const isOptional = parameter.name.endsWith("?");
        const nameWithoutParentObject = (parameter.name.split(".").pop() ?? parameter.name).replace("?", "");
        // boolean
        if (parameter.type === "boolean") {
            return options.set(nameWithoutParentObject, {
                optional: isOptional,
                description: parameter.description,
                type: "Boolean",
            });
        } else if (parameter.type === "string") {
            return options.set(nameWithoutParentObject, {
                optional: isOptional,
                description: parameter.description,
                type: "String",

            });
        } else if (parameter.type === "number") {
            return options.set(nameWithoutParentObject, {
                optional: isOptional,
                description: parameter.description,
                type: "Int",
            }); // TODO: int?
        }
        throw new Error(`Unknown type: ${parameter.type}`);
    });
    return Object.fromEntries(options);
}
Object.entries(finance).forEach(([key, value]) => {
    // console.log(key, value)
    const directiveInfo: DirectiveInfo = {
        name: key,
        moduleName: "finance",
        options: parametersToOptions(value.parameters),
    };
    console.log(generateDirective(directiveInfo));
});
