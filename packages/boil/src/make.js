import path from "path";
import shell from "shelljs";
import chalk from "chalk";

const make = (name, template, relativePath) => {
  const cwd = process.cwd();

  const directory = relativePath
    .split("/")
    .slice(0, -1)
    .join("/");

  if (directory) {
    shell.mkdir("-p", directory);
  }

  const file = template(name);
  const fd = path.resolve(cwd, relativePath);
  shell.ShellString(file).toEnd(fd);
  console.log(chalk.green("boilerplated added at: ") + chalk.bold(fd));
};

export default make;
