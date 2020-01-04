/* eslint-disable no-console, prefer-template */
import chalk from 'chalk';

/**
 * Print a json configuration object to the console. Used for debugging the
 * configuration and diagnosing issues with the .boilrc configuration file
 */
function printConfiguration(config): void {
  console.log(chalk.green('\nCURRENT CONFIG:\n'));
  Object.entries(config).forEach(([key, value]): void => {
    console.log(key + ': ' + chalk.bold(value));
  });
}

export default printConfiguration;
