import pkgDir from 'pkg-dir';

/**
 * Get the nearest project root. Search for package.json starting in current
 * working directory and then searching recursively upwards.
 */
function getProjectRoot() {
  return pkgDir.sync(process.cwd());
}

export default getProjectRoot;
