import yargs from 'yargs';
import { Logger, scaffold } from '../utils/index.js';
import {
	currentWorkingDirectory,
	getDestinationPaths,
	SOURCE_FILES,
} from '../directories.js';

export default class CreateCommand {
	public static command: string = 'create [engine-name]';

	public static description: string =
		'Generates REST endpoints of the given engine-name with DTOs.';

	public static builder(
		yargs: yargs.Argv<{}>
	): yargs.BuilderCallback<{}, {}> | undefined {
		yargs.positional('engine-name', {
			type: 'string',
			describe: 'engine name - the name of the entity and its endpoints',
		});
		return undefined;
	}

	public static handler(argv: yargs.ArgumentsCamelCase<{}>) {
		const engineName = argv['engine-name'] as string;

		if (!engineName) {
			Logger.error('Please specify a singular engine name');
			return;
		}

		const lowerCaseEngineName = engineName.toLowerCase();

		const src = '/src',
			engines = '/src/engines',
			apiFolder = `${src}/pages/api/${lowerCaseEngineName}`;

		if (currentWorkingDirectory(src).dontExist()) {
			Logger.info('creating src folder');
			currentWorkingDirectory(src).create();
		}
		if (currentWorkingDirectory(engines).dontExist()) {
			Logger.info('creating engines folder');
			currentWorkingDirectory(engines).create();
		}

		currentWorkingDirectory(`${engines}/${lowerCaseEngineName}`).create();
		//currentWorkingDirectory(`${engines}/${lowerCaseEngineName}/hooks`).create();
		currentWorkingDirectory(apiFolder).create();
		Logger.info(`${apiFolder} folder created`);

		Logger.info(`Scaffolding your files`);

		const DESTINATION_FILES = getDestinationPaths(lowerCaseEngineName);

		scaffold(SOURCE_FILES.dto, DESTINATION_FILES.dto, lowerCaseEngineName);
		scaffold(
			SOURCE_FILES.handler,
			DESTINATION_FILES.handler,
			lowerCaseEngineName
		);
		//scaffold(
		//	SOURCE_FILES.hooks.all,
		//	DESTINATION_FILES.hooks.all,
		//	lowerCaseEngineName
		//);
		//scaffold(
		//	SOURCE_FILES.hooks.create,
		//	DESTINATION_FILES.hooks.create,
		//	lowerCaseEngineName
		//);
		//scaffold(
		//	SOURCE_FILES.hooks.get,
		//	DESTINATION_FILES.hooks.get,
		//	lowerCaseEngineName
		//);
		//scaffold(
		//	SOURCE_FILES.hooks.update,
		//	DESTINATION_FILES.hooks.update,
		//	lowerCaseEngineName
		//);
		//scaffold(
		//	SOURCE_FILES.hooks.index,
		//	DESTINATION_FILES.hooks.index,
		//	lowerCaseEngineName
		//);

		//if (argv.h) {
		//	Logger.info(`Generating react-query hooks`);
		//	fs.mkdirSync(currentDir + `/src/engines/${routeName}/hooks`);
		//	scaffold(
		//		SOURCE_FILES.hooks.getAll,
		//		DESTINATION_FILES.hooks.getAll,
		//		routeName
		//	);
		//}

		//Logger.success(`${routeNameTitleCase} Engine created`);
	}
}
