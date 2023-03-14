import chalk from 'chalk';
export const Logger = {
    info: (message) => console.log(chalk.bold(`=> ${message}`)),
    error: (message) => console.log(chalk.redBright.bold(`❌ ${message}`)),
    success: (message) => console.log(chalk.greenBright.bold(`✅ ${message}`)),
};
