// MEMO: The tests for this module are covered by `e2e/*.e2e.ts`.

import { type PluginFunction } from '@graphql-codegen/plugin-helpers';
import { generateCode, generateDefaultFactoryCode } from './code-generator.js';
import { normalizeConfig, validateConfig } from './config.js';
import { getTypeInfos } from './schema-scanner.js';
import * as fs from "fs";
import path from "node:path";

export const plugin: PluginFunction = (schema, _documents, config, info) => {
    validateConfig(config);

    const normalizedConfig = normalizeConfig(config);
    const typeInfos = getTypeInfos(normalizedConfig, schema);
    const code = generateCode(normalizedConfig, typeInfos);
    if (!info?.outputFile) {
        return code;
    }
    const relativePath = path.posix.relative(path.dirname(normalizedConfig.fakeOutputPath), info.outputFile);
    const fakeOutputPath = relativePath.startsWith('.') ? relativePath : './' + relativePath;
    const fakeCode = generateDefaultFactoryCode(normalizedConfig, typeInfos, fakeOutputPath);
    fs.writeFileSync(normalizedConfig.fakeOutputPath, fakeCode, 'utf-8');
    return code;
};
