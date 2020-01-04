import path from 'path';

/**
 * Resolve a path that is given as a configuration value. If the path is an
 * absolute path then we simply use the absolute path. If it is a relative path
 * then we resolve the path relative to the location that specified the path
 */
function resolvePathOption(pathLocation: string, pathOption: string): string {
  if (!pathOption || (!pathLocation && !pathOption)) {
    return '';
  }

  if (!pathLocation) {
    return pathOption;
  }

  if (path.isAbsolute(pathOption)) {
    return pathOption;
  }

  return path.resolve(pathLocation, pathOption);
}

export default resolvePathOption;
