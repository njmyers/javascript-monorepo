import fs from 'fs';
import path from 'path';

/**
 * Search directories recursively upwards. If the directory exists return the
 * first one found otherwise return undefined.
 */
function findDirectoryUpwards(currentPath, directoryName) {
  if (currentPath === path.dirname(currentPath)) {
    return undefined;
  }

  if (!fs.existsSync(path.resolve(currentPath, directoryName))) {
    return findDirectoryUpwards(path.dirname(currentPath), directoryName);
  }

  return path.resolve(currentPath, directoryName);
}

export default findDirectoryUpwards;
