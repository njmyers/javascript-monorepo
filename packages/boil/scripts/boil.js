#!/usr/bin/env node
const shell = require("shelljs");
const path = require("path");

const cli = require("../build/boil.cjs.js");

function getTemplatesDirectories() {
  const templateFolder = path.resolve(__dirname, "../templates");
  return shell.ls(templateFolder).map(dir => path.resolve(templateFolder, dir));
}

cli(getTemplatesDirectories());
