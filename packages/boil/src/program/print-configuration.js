import chalk from 'chalk';

/**
 * Print a json configuration object to the console. Used for debugging the
 * configuration and diagnosing issues with the .boilrc configuration file
 */
function printConfiguration(config) {
  console.log(chalk.green('\ncurrent config:'));
  Object.entries(config).forEach(([key, value]) => {
    console.log(key + ': ' + chalk.bold(value));
  });
}

export default printConfiguration;
