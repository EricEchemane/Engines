import { createGuard, Logger, totTitleCase } from '../utils/index.js';
import { currentWorkingDirectory, getDestinationPaths, SOURCE_FILES, } from '../directories.js';
class GuardCommand {
    static command = 'guard [guard-name]';
    static description = 'Generates next-api-decorator guard';
    static builder(yargs) {
        yargs.positional('guard-name', {
            type: 'string',
            describe: 'guard name - example: auth, this will generate "AuthGuard"',
        });
        return undefined;
    }
    static handler(argv) {
        const guardName = argv['guard-name'];
        if (!guardName) {
            Logger.error('Please specify a guard name');
            return;
        }
        const lowerCaseguardName = guardName.toLowerCase();
        const GUARD_NAME = totTitleCase(lowerCaseguardName) + 'Guard';
        const src = '/src', engines = '/src/engines', guards = '/src/engines/guards';
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
export default GuardCommand;
