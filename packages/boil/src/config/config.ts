import path from 'path';
import cosmiconfig from 'cosmiconfig';

import getDefaultTemplateDirectory from './get-default-template-directory';
import getProjectRoot from './get-project-root';
import getDefaultCodePath from './get-default-code-path';
import getResolvedPathOptions from './get-resolved-path-options';
import getCliRoot from './get-cli-root';

const RC_FILENAME = 'boil';

export interface Config {
  templateDirectory?: string;
  projectRoot?: string;
  codePath?: string;
  configPath?: string;
  extension?: string;
  include?: string;
  exclude?: string;
  debug?: boolean;
  dryRun?: boolean;
}

const defaults: Config = {
  templateDirectory: getDefaultTemplateDirectory(),
  projectRoot: getProjectRoot(),
  codePath: getDefaultCodePath(),
  configPath: getCliRoot(),
  extension: undefined,
  include: undefined,
  exclude: undefined,
  debug: false,
  dryRun: false,
};

const result = cosmiconfig(RC_FILENAME).searchSync() || {};

const rcConfig = result.config;
const rcFilePath = result.filepath;
const rcDirectory = (rcFilePath && path.dirname(rcFilePath)) || undefined;

const config = {
  ...defaults,
  ...rcConfig,
  ...getResolvedPathOptions(rcDirectory, rcConfig),
};

export default config;
