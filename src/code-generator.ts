import { Config } from './config.js';
import { FakerDirective, ObjectTypeInfo, TypeInfo } from './schema-scanner.js';
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

const handleFaker = (faker: FakerDirective): string => {
    if ("methodName" in faker && "options" in faker) {
        const options = faker.options ? `${JSON.stringify(faker.options)}` : '';
        return `dynamic(() => ${faker.methodName}(${options}))`;
    } else if ("function" in faker) {
        return `dynamic(() => ${faker.function})`;
    }
    throw new Error('Invalid faker directive' + JSON.stringify(faker));
}

export function generateDefaultFactory(_: Config, typeInfo: ObjectTypeInfo): string {
    const { name } = typeInfo;
    // get${name}Factory is for avoiding TS circular dependencies error
    // https://github.com/Quramy/prisma-fabbrica#suppress-ts-circular-dependencies-error
    return `
/**
 * Factory for {@link ${name}} model.
 */
export const ${name}Factory = define${name}Factory({
  defaultFields: {
${typeInfo.fields
        // name: dynamic(() => faker.name.findName()),
        .flatMap(({ name, faker }) => {
            if (!faker) {
                return [];
            }
            return [`    ${name}: ${handleFaker(faker)}`];
        })
        .join(',\n')}
  },
});
function get${name}Factory(): { build: () => Optional${name}; buildList: (size: number) => Optional${name}[]; } {
    return ${name}Factory as unknown as { build: () => Optional${name}; buildList: (size: number) => Optional${name}[]; };
}
`.trimStart();
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
        }
    }
    return code;
}

export function generateDefaultFactoryCode(config: Config, typeInfos: TypeInfo[], factoryFile:string): string {
    const importDynamic = `import { dynamic } from '@mizdra/graphql-codegen-typescript-fabbrica/helper';`;
    const allFactoryNames = typeInfos.map((typeInfo) => {
        return `define${typeInfo.name}Factory`;
    });
    const allTypeName = typeInfos.map((typeInfo) => {
        return `Optional${typeInfo.name}`;
    })
    const importFactory = `import { ${allFactoryNames.join(",")} } from '${factoryFile}';`;
    const importTypes = `import type { ${allTypeName.join(",")} } from '${factoryFile}';`;
    const objectTypes = typeInfos.filter((typeInfo) => typeInfo.type === 'object') as ObjectTypeInfo[];
    const importFaker = `import {faker } from '@faker-js/faker';`
    return `${importDynamic}\n${importTypes}\n${importFactory}\n${importFaker}
${objectTypes.map((typeInfo) => generateDefaultFactory(config, typeInfo)).join('\n')}`;
}
