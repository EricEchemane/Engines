import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { totTitleCase } from './utils/index.js';

export const DIRNAME = path.dirname(fileURLToPath(import.meta.url));
export const CWD = process.cwd();

/**
 *
 * @param path the path segment next to the current working directory
 * @returns an object with utility functions
 */
export function currentWorkingDirectory(path: string) {
	const fullPath = CWD + path;
	return {
		exist: () => fs.existsSync(fullPath),
		dontExist: () => !fs.existsSync(fullPath),
		create: () => fs.mkdirSync(fullPath),
	};
}

export function getDestinationPaths(engineName: string) {
	engineName = engineName.toLocaleLowerCase();
	const EngineName = totTitleCase(engineName);
	return {
		dto: CWD + `/src/engines/${engineName}/${engineName}.dto.ts`,
		guard: CWD + `/src/engines/guards/${engineName}.guard.ts`,
		hooks: {
			index: CWD + `/src/engines/${engineName}/hooks/index.ts`,
			create:
				CWD + `/src/engines/${engineName}/hooks/useCreate${EngineName}.ts`,
			get: CWD + `/src/engines/${engineName}/hooks/useGet${EngineName}.ts`,
			all: CWD + `/src/engines/${engineName}/hooks/useGet${EngineName}s.ts`,
			update:
				CWD + `/src/engines/${engineName}/hooks/useUpdate${EngineName}.ts`,
		},
		handler: CWD + `/src/pages/api/${engineName}/[[...params]].ts`,
	};
}

export const SOURCE_FILES = {
	dto: DIRNAME + '/template/engines/product/product.dto.ts',
	guard: DIRNAME + '/template/engines/product/guards/auth.guard.ts',
	hooks: {
		index: DIRNAME + `/template/engines/product/hooks/index.ts`,
		create: DIRNAME + `/template/engines/product/hooks/useCreateProduct.ts`,
		get: DIRNAME + `/template/engines/product/hooks/useGetProduct.ts`,
		all: DIRNAME + `/template/engines/product/hooks/useGetProducts.ts`,
		update: DIRNAME + `/template/engines/product/hooks/useUpdateProduct.ts`,
	},
	handler: DIRNAME + '/template/pages/api/product/[[...params]].ts',
};
