import fs from "fs";
import path from "path";
import cosmiconfig from "cosmiconfig";

import getDefaultTemplateDirectory from "./get-default-template-directory";
import getProjectRoot from "./get-project-root";
import getDefaultCodePath from "./get-default-code-path";
import resolvePathOption from "./resolve-path-option";

const PATH_OPTIONS = ["tempateDirectory", "projectRoot", "codePath"];

const defaults = {
  templateDirectory: getDefaultTemplateDirectory(),
  projectRoot: getProjectRoot(),
  codePath: getDefaultCodePath(),
  extension: undefined,
  include: undefined,
  exclude: undefined
};

const result = cosmiconfig("boil").searchSync();

const config = {
  ...defaults,
  ...((result && result.config) || {}),
  ...PATH_OPTIONS.reduce((pathOptions, pathKey) => {
    if (!(result && result.filepath)) {
      return pathOptions;
    }

    if (!Object.prototype.hasOwnProperty.call(result.config, pathKey)) {
      return pathOptions;
    }

    const pathOption = result.config[pathKey];

    if (typeof pathOption !== "string") {
      return pathOptions;
    }

    pathOptions[pathKey] = resolvePathOption(result.filepath, pathOption);

    return pathOptions;
  }, {})
};

export default config;
