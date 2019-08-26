import resolvePathOption from "./resolve-path-option";

const PATH_OPTIONS = ["templateDirectory", "projectRoot", "codePath"];

/**
 * Get the fully resolved absolute path of all path related options specified in
 * a .boilrc file. Options may me specified as an absolute path or as a relative
 * path. If they are specified as relative paths then we resolve them from the
 * directory of the .boilrc file.
 */
function getResolvedPathOptions(result) {
  return PATH_OPTIONS.reduce((pathOptions, pathKey) => {
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
  }, {});
}

export default getResolvedPathOptions;
