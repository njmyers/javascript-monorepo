import program from "commander";
import path from "path";
import shell from "shelljs";
import directory from "@njmyers/directory";
import chalk from "chalk";

import pkg from "../package.json";
import fileConfig from "./config";
import "./notifier";

import { replaceTemplateStrings, removeLeadingSlash } from "./utils";

program
  .version(pkg.version, "-v, --version")
  .option("-e, --extension", "override template file extension")
  .option(
    "-p, --code-path <path>",
    "create files at another path",
    fileConfig.codePath
  )
  .option("-i, --include <include>", "include matched template files paths")
  .option("-e, --exclude <exclude>", "exclude matched template files paths")
  .option("-d, --debug", "print configuration and debug program")
  .option(
    "-D, --dry-run",
    "perform a dry run and do not modify files",
    fileConfig.dryRun
  );

shell
  .ls(fileConfig.templateDirectory)
  .map(templateFolder =>
    path.resolve(fileConfig.templateDirectory, templateFolder)
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
        const config = { ...fileConfig, ...program.opts() };

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
              return include ? descriptor.path.match(program.include) : true;
            })
            .filter(descriptor => {
              const { exclude } = config;
              return exclude ? !descriptor.path.match(program.exclude) : true;
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
              }

              console.log(
                chalk.green("boilerplate added at: ") + chalk.bold(writePath)
              );
            });
        });
      });
  });

program.parse(process.argv);

// add newline after all program output
console.log("");
