import chalk from 'chalk';

export const Logger = {
	info: (message: string) => console.log(chalk.bold(`=> ${message}`)),
	error: (message: string) =>
		console.log(chalk.redBright.bold(`❌ ${message}`)),
	success: (message: string) =>
		console.log(chalk.greenBright.bold(`✅ ${message}`)),
};
