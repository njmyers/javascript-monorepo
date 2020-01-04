import fs from 'fs';
import path from 'path';

type stringy = string | undefined;

/**
 * Search directories recursively upwards. If the directory exists return the
 * first one found otherwise return undefined.
 */
function findDirectoryUpwards(currentPath: string, directory: string): stringy {
  if (currentPath === path.dirname(currentPath)) {
    return undefined;
  }

  if (!fs.existsSync(path.resolve(currentPath, directory))) {
    return findDirectoryUpwards(path.dirname(currentPath), directory);
  }

  return path.resolve(currentPath, directory);
}

export default findDirectoryUpwards;
