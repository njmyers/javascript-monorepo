// @ts-nocheck
import program from 'commander';
import path from 'path';
import directory from '@njmyers/directory';

import rcConfig from '../config';
import pkg from '../../package.json';
import './notifier';

import { getResolvedPathOptions } from '../config';
import { replaceTemplateStrings, removeLeadingSlash } from '../utils';

import getTemplateFolders from './get-template-folders';
import templateFileFilter from './template-file-filter';
import writeTemplateFile from './write-template-file';
import printTemplateFile from './print-template-file';
import printConfiguration from './print-configuration';

program
  .version(pkg.version, '-v, --version')
  .option(
    '-E, --extension',
    'override template file extension',
    rcConfig.extension
  )
  .option(
    '-p, --code-path <path>',
    'create files at another path',
    rcConfig.codePath
  )
  .option(
    '-i, --include <include>',
    'include only matched template file paths',
    rcConfig.include
  )
  .option(
    '-e, --exclude <exclude>',
    'exclude matched template file paths',
    rcConfig.exclude
  )
  .option(
    '-d, --debug',
    'print configuration and debug program',
    rcConfig.debug
  )
  .option(
    '-D, --dry-run',
    'perform a dry run and do not modify files',
    rcConfig.dryRun
  );

const templateFolders = getTemplateFolders(rcConfig);

templateFolders.forEach(templatePath => {
  const templateName = path.basename(templatePath);

  const templateFiles = directory(templatePath, {
    recursive: true,
    read: true,
    mime: true,
  });

  program
    .command(`${templateName} [${templateName}-kebab-names...]`)
    .action(kebabNames => {
      const cliConfig = program.opts();

      const config = {
        ...rcConfig,
        ...cliConfig,
        ...getResolvedPathOptions(process.cwd(), cliConfig),
      };

      if (config.debug) {
        printConfiguration(config);
      }

      kebabNames.forEach(kebabName => {
        templateFiles
          .filter(templateFileFilter(config))
          .forEach(templateFile => {
            const relativePath = removeLeadingSlash(
              templateFile.path.split(templateName).pop()
            );

            const writePath = replaceTemplateStrings(
              path.resolve(config.codePath, relativePath),
              kebabName
            );

            const fileContents = replaceTemplateStrings(
              templateFile.file,
              kebabName
            );

            if (config.dryRun) {
              printTemplateFile(fileContents, writePath);
            } else {
              writeTemplateFile(fileContents, writePath);
            }
          });
      });
    });
});

program.parse(process.argv);

// If no template folders are found or we must add additional functionality to
// the base program. This is because no sub-commands will have been defined. We
// can also define this functionality for when no sub-command has been passed as
// an argument. This will allow us to debug a non-working template directory.
if (templateFolders.length < 1 || program.args.length < 1) {
  const cliConfig = program.opts();

  const config = {
    ...rcConfig,
    ...cliConfig,
    ...getResolvedPathOptions(process.cwd(), cliConfig),
  };

  if (config.debug) {
    printConfiguration(config);
  }
}

// add newline after all program output
// eslint-disable-next-line no-console
console.log('');
