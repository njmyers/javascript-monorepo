import path from "path";
import shell from "shelljs";

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
  shell.echo(file).toEnd(path.resolve(cwd, relativePath));
};

export default make;
