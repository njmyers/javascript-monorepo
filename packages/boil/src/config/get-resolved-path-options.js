import resolvePathOption from "./resolve-path-option";

const PATH_OPTIONS = ["templateDirectory", "projectRoot", "codePath"];

/**
 * Get the fully resolved absolute path of all path related options specified in
 * a .boilrc file. Options may me specified as an absolute path or as a relative
 * path. If they are specified as relative paths then we resolve them from the
 * directory of the .boilrc file.
 */
function getResolvedPathOptions(filePath, config = {}) {
  return PATH_OPTIONS.reduce((pathOptions, pathKey) => {
    if (!Object.prototype.hasOwnProperty.call(config, pathKey)) {
      return pathOptions;
    }

    const pathOption = config[pathKey];

    if (typeof pathOption !== "string") {
      return pathOptions;
    }

    pathOptions[pathKey] = resolvePathOption(filePath, pathOption);

    return pathOptions;
  }, {});
}

export default getResolvedPathOptions;
