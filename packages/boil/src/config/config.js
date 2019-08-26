import cosmiconfig from "cosmiconfig";

import getDefaultTemplateDirectory from "./get-default-template-directory";
import getProjectRoot from "./get-project-root";
import getDefaultCodePath from "./get-default-code-path";
import getResolvedPathOptions from "./get-resolved-path-options";

const defaults = {
  templateDirectory: getDefaultTemplateDirectory(),
  projectRoot: getProjectRoot(),
  codePath: getDefaultCodePath(),
  extension: undefined,
  include: undefined,
  exclude: undefined,
  debug: false,
  dryRun: false
};

const result = cosmiconfig("boil").searchSync();

const config = {
  ...defaults,
  ...((result && result.config) || {}),
  ...((result && getResolvedPathOptions(result.filepath, result.config)) || {})
};

export default config;
