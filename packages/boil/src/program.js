import program from "commander";
import path from "path";
import shell from "shelljs";
import directory from "@njmyers/directory";
import chalk from "chalk";

import pkg from "../package.json";
import rcConfig from "./config";
import "./notifier";

import { getResolvedPathOptions } from "./config";
import { replaceTemplateStrings, removeLeadingSlash } from "./utils";

program
  .version(pkg.version, "-v, --version")
  .option(
    "-E, --extension",
    "override template file extension",
    rcConfig.extension
  )
  .option(
    "-p, --code-path <path>",
    "create files at another path",
    rcConfig.codePath
  )
  .option(
    "-i, --include <include>",
    "include matched template files paths",
    rcConfig.include
  )
  .option(
    "-e, --exclude <exclude>",
    "exclude matched template files paths",
    rcConfig.exclude
  )
  .option(
    "-d, --debug",
    "print configuration and debug program",
    rcConfig.debug
  )
  .option(
    "-D, --dry-run",
    "perform a dry run and do not modify files",
    rcConfig.dryRun
  );

shell
  .ls(rcConfig.templateDirectory)
  .map(templateFolder =>
    path.resolve(rcConfig.templateDirectory, templateFolder)
  )
  .forEach(templatePath => {
    const directoryName = templatePath.split(path.sep).pop();

    const templateFiles = directory(templatePath, {
      recursive: true,
      read: true,
      mime: true
    });

    program
      .command(`${directoryName} [${directoryName}-names...]`)
      .action(kebabNames => {
        const cliConfig = program.opts();

        const config = {
          ...rcConfig,
          ...cliConfig,
          ...getResolvedPathOptions(process.cwd(), cliConfig)
        };

        if (config.debug) {
          console.log(chalk.green("\ncurrent config:"));
          Object.entries(config).forEach(([key, value]) => {
            console.log(key + ": " + chalk.bold(value));
          });
        }

        kebabNames.forEach(name => {
          templateFiles
            .filter(descriptor => {
              const { include } = config;
              return include ? descriptor.path.match(include) : true;
            })
            .filter(descriptor => {
              const { exclude } = config;
              return exclude ? !descriptor.path.match(exclude) : true;
            })
            .forEach(descriptor => {
              const relativePath = removeLeadingSlash(
                descriptor.path.split(directoryName).pop()
              );

              const writePath = replaceTemplateStrings(
                path.resolve(config.codePath, relativePath),
                name
              );

              if (!config.dryRun) {
                shell.mkdir("-p", path.dirname(writePath));

                shell
                  .ShellString(replaceTemplateStrings(descriptor.file, name))
                  .toEnd(writePath);

                console.log(
                  chalk.green("boilerplate added at: ") + chalk.bold(writePath)
                );
              }

              if (config.dryRun) {
                console.log(
                  chalk.green("dry run of boilerplate at: ") +
                    chalk.bold(writePath) +
                    "\n"
                );

                console.log(replaceTemplateStrings(descriptor.file, name));
              }
            });
        });
      });
  });

program.parse(process.argv);

// add newline after all program output
console.log("");
