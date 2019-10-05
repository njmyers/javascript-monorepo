import chalk from 'chalk';

/**
 * Prints the contents of a file as well as the write path that would be written
 * to. This is meant to be a safe code path to check/debug and ensure your
 * templates and file contents would write to the correct destination with the
 * correct contents.
 */
function printTemplateFile(fileContents, writePath) {
  console.log(
    chalk.green('dry run of boilerplate at: ') + chalk.bold(writePath) + '\n'
  );

  console.log(fileContents);
}

export default printTemplateFile;
