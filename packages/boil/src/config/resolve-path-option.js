import path from "path";

/**
 * Resolve a path that is given as a configuration value. If the path is an
 * absolute path then we simply use the absolute path. If it is a relative path
 * then we resolve the path relative to the location of the .boilrc file that
 * specified the path
 */
function resolvePathOption(rcFilePath, pathOption) {
  if (path.isAbsolute(pathOption)) {
    return pathOption;
  }

  return path.resolve(path.dirname(rcFilePath), pathOption);
}

export default resolvePathOption;
