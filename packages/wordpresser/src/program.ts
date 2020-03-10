import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import program from 'commander';
import pkgDir from 'pkg-dir';

import Wordpresser from './Wordpresser';

const PACKAGE_DIR = pkgDir.sync() || process.cwd();
const pkg = JSON.parse(
  fs.readFileSync(path.resolve(PACKAGE_DIR, 'package.json'), 'utf8')
);

program
  .version(pkg.version, '-v, --version')
  .description('CLI for downloading data from the wordpress REST api')
  .usage('[...postTypes]')
  .option('-w --wp-base [domain]', 'Wordpress base url')
  .option('-b --base-url [base]', 'Base url in unexpected wordpress format')
  .option('-r --recursive', 'Download all data for each post type', false)
  .option('-f --file [file]', 'File name to output all data')
  .action(async ({ file, ...config }, postTypes) => {
    const wordpresser = new Wordpresser(config);
    console.log(chalk.bold(`\n=> Requesting data from: ${config.wpBase}\n`));

    try {
      await wordpresser.getPostTypes(postTypes, config);
    } catch (error) {
      return console.log(chalk.bold.red(error));
    }

    const json = wordpresser.getJSON();

    if (file) {
      const fileName = path.basename(file, '.json');
      const fileDescriptor = path.resolve(`${fileName}.json`);

      console.log(chalk.green('\nJSON file written to:'));
      console.log(chalk.bold(fileDescriptor));

      fs.writeFileSync(fileDescriptor, json);
    } else {
      console.log(chalk.bold('\nOutputting json to console:'));
      console.log(json);
    }

    console.log();
  });

program.parse(process.argv);
