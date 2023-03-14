import yargs from 'yargs';
import { createGuard, Logger, scaffold, totTitleCase } from '../utils/index.js';
import {
	currentWorkingDirectory,
	getDestinationPaths,
	SOURCE_FILES,
} from '../directories.js';

export default class GuardCommand {
	public static command: string = 'guard [guard-name]';

	public static description: string = 'Generates next-api-decorator guard';

	public static builder(
		yargs: yargs.Argv<{}>
	): yargs.BuilderCallback<{}, {}> | undefined {
		yargs.positional('guard-name', {
			type: 'string',
			describe: 'guard name - example: auth, this will generate "AuthGuard"',
		});
		return undefined;
	}

	public static handler(argv: yargs.ArgumentsCamelCase<{}>) {
		const guardName = argv['guard-name'] as string;

		if (!guardName) {
			Logger.error('Please specify a guard name');
			return;
		}

		const lowerCaseguardName = guardName.toLowerCase();
		const GUARD_NAME = totTitleCase(lowerCaseguardName) + 'Guard';

		const src = '/src',
			engines = '/src/engines',
			guards = '/src/engines/guards';

		if (currentWorkingDirectory(src).dontExist()) {
			Logger.info('creating src folder');
			currentWorkingDirectory(src).create();
		}
		if (currentWorkingDirectory(engines).dontExist()) {
			Logger.info('creating engines folder');
			currentWorkingDirectory(engines).create();
		}
		if (currentWorkingDirectory(guards).dontExist()) {
			Logger.info('creating guards folder');
			currentWorkingDirectory(guards).create();
		}

		Logger.info(`Scaffolding your guard`);

		const DESTINATION_FILES = getDestinationPaths(lowerCaseguardName);

		createGuard(SOURCE_FILES.guard, DESTINATION_FILES.guard, GUARD_NAME);

		Logger.success(`${GUARD_NAME} created`);
	}
}
