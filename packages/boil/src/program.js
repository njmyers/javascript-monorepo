import path from "path";
import shell from "shelljs";
import directory from "@njmyers/directory";
import chalk from "chalk";

import { replaceTemplateStrings, removeLeadingSlash } from "./utils";

const componentProgram = (program, directories) => {
  program
    .option("-e, --extension", "override template file extension")
    .option(
      "-p, --path <path>",
      "create boilerplate at another path",
      process.cwd()
    )
    .option(
      "-f, --filter <string>",
      "js regexp to match specific template files paths"
    );

  directories.forEach(dir => {
    const directoryName = dir.split(path.sep).pop();

    const templateFiles = directory(dir, {
      recursive: true,
      read: true,
      mime: true
    });

    const currentPath = process.cwd();

    program
      .command(`${directoryName} [${directoryName}-names...]`)
      .action((...args) => {
        const [options, kebabNames] = args.reverse();

        // const ext = options.extension;
        // console.log(options.options, kebabNames);

        kebabNames.forEach(name => {
          templateFiles
            .filter(descriptor => descriptor.path.match(options.filter))
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
};

export default componentProgram;
