#!/usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import CreateCommand from './commands/create.js';
import GuardCommand from './commands/guard.js';

yargs(hideBin(process.argv))
	.scriptName('engine')
	.usage('$0 <cmd> [args]')
	.command(
		'$0',
		'The default command',
		() => {},
		() => {
			console.log('ENGINES');
		}
	)
	.command(
		CreateCommand.command,
		CreateCommand.description,
		CreateCommand.builder,
		CreateCommand.handler
	)
	.alias('h', 'hooks')
	.describe('h', 'Generate react-query hooks for each endpoint')
	.command(
		GuardCommand.command,
		GuardCommand.description,
		GuardCommand.builder,
		GuardCommand.handler
	)
	.alias('v', 'version')
	.help().argv;
