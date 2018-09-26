#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const program = require('commander');
const pkg = require(path.resolve(__dirname, '../package.json'));

const Wordpresser = require(path.resolve(
  __dirname,
  '../build/wordpresser.cjs.js'
));

function action(args, wpOptions, cliOptions) {
  const press = new Wordpresser(wpOptions);

  console.log(chalk.bold(`\nrequesting data from: ${wpOptions.wpBase}\n`));

  press
    .getPostTypes(args, wpOptions)
    .then((responses) => {
      const data = press.getJSON();

      if (cliOptions.file) {
        const fileName = path.basename(cliOptions.file, '.json');
        const fileDescriptor = path.resolve(process.cwd(), `${fileName}.json`);

        console.log(
          chalk.green(`json file written to: \n`) +
            chalk.bold(`${fileDescriptor}\n`)
        );

        fs.writeFileSync(fileDescriptor, data);
      } else {
        console.log(chalk.bold(`your data: \n`));
        console.log(`${data}\n`);
      }
    })
    .catch((error) => {
      console.log(chalk.red(error));
    });
}

function _validateEnvironment(options, ...args) {
  if (args.length === 0) {
    throw new Error('Please supply post types to fetch');
  }

  const wpOptions = {
    recursive: options.recursive,
    baseURL: options.baseUrl,
    wpBase: options.wpBase,
  };

  const cliOptions = {
    file: options.file,
  };

  action(args, wpOptions, cliOptions);
}

const validateEnvironment = (...args) =>
  _validateEnvironment(...args.reverse());

program
  .version(pkg.version)
  .option('-w --wp-base [domain]', 'wordpress bases url')
  .option('-b --base-url [base]', 'base url non-wordpress format')
  .option('-r --recursive', 'download all posts of input types', false)
  .option('-f --file [file]', 'file name to output all data')
  .action(validateEnvironment);

program.parse(process.argv);
