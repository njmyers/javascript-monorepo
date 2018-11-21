import program from "commander";
import pkg from "../package.json";
import * as clis from "./clis";

program.version(pkg.version, "-v, --version");

Object.values(clis).forEach(cli => cli(program));

program.parse(process.argv);
