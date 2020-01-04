/* eslint-disable no-console */
import path from 'path';
import shell from 'shelljs';
import chalk from 'chalk';

/**
 * Append the contents of a file to a write path. This function checks and
 * ensures that the destination directory exists before writing. It is also
 * non-destructive and appends the contents if a file exists rather the
 * overwriting the contents
 */
function writeTemplateFile(fileContents: string, writePath: string): void {
  shell.mkdir('-p', path.dirname(writePath));
  shell.ShellString(fileContents).toEnd(writePath);

  console.log(chalk.green('boilerplate added at: ') + chalk.bold(writePath));
}

export default writeTemplateFile;
