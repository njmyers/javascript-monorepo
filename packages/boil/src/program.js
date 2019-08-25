import program from "commander";
import path from "path";
import shell from "shelljs";
import directory from "@njmyers/directory";
import chalk from "chalk";
import updateNotifier from "update-notifier";
import rc from "rc";

import pkg from "../package.json";
import defaults from "./defaults";

import { replaceTemplateStrings, removeLeadingSlash } from "./utils";

updateNotifier({ pkg }).notify();

program
  .version(pkg.version, "-v, --version")
  .option("-e, --extension", "override template file extension")
  .option("-p, --path <path>", "create files at another path", process.cwd())
  .option("-i, --include <include>", "include matched template files paths")
  .option("-e, --exclude <exclude>", "exclude matched template files paths");

const { templatesDirectory } = rc("boil", defaults);

shell
  .ls(templatesDirectory)
  .map(templateFolder => path.resolve(templatesDirectory, templateFolder))
  .forEach(templatePath => {
    const directoryName = templatePath.split(path.sep).pop();

    const templateFiles = directory(templatePath, {
      recursive: true,
      read: true,
      mime: true
    });

    const currentPath = process.cwd();

    program
      .command(`${directoryName} [${directoryName}-names...]`)
      .action(kebabNames => {
        const options = rc("boil", defaults, program);

        kebabNames.forEach(name => {
          templateFiles
            .filter(descriptor => {
              const { include } = options;
              return include ? descriptor.path.match(program.include) : true;
            })
            .filter(descriptor => {
              const { exclude } = options;
              return exclude ? !descriptor.path.match(program.exclude) : true;
            })
            .forEach(descriptor => {
              const relativePath = removeLeadingSlash(
                descriptor.path.split(directoryName).pop()
              );

              const writePath = replaceTemplateStrings(
                path.resolve(currentPath, relativePath),
                name
              );

              shell.mkdir("-p", path.dirname(writePath));

              shell
                .ShellString(replaceTemplateStrings(descriptor.file, name))
                .toEnd(writePath);

              console.log(
                chalk.green("boilerplate added at: ") + chalk.bold(writePath)
              );
            });
        });
      });
  });

program.parse(process.argv);
