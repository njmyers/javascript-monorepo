import resolvePathOption from './resolve-path-option';
import { Config } from './config';

const PATH_KEYS: (keyof Config)[] = [
  'templateDirectory',
  'projectRoot',
  'codePath',
];

const emptyConfig: Partial<Config> = {};

/**
 * Get the fully resolved absolute path of all path related options specified in
 * a .boilrc file. Options may me specified as an absolute path or as a relative
 * path. If they are specified as relative paths then we resolve them from the
 * directory of the .boilrc file.
 */
function getResolvedPathOptions(
  filePath?: string,
  config: Partial<Config> = {}
): Partial<Config> {
  if (!filePath) {
    return emptyConfig;
  }

  return PATH_KEYS.reduce((pathOptions, pathKey) => {
    if (!Object.prototype.hasOwnProperty.call(config, pathKey)) {
      return pathOptions;
    }

    const relativePath = config[pathKey];

    if (typeof relativePath !== 'string') {
      return pathOptions;
    }

    // @ts-ignore
    pathOptions[pathKey] = resolvePathOption(filePath, relativePath);

    return pathOptions;
  }, emptyConfig);
}

export default getResolvedPathOptions;
