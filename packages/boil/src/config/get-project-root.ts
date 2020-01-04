import pkgDir from 'pkg-dir';

/**
 * Get the nearest project root. Search for package.json starting in current
 * working directory and then searching recursively upwards.
 */
function getProjectRoot(): string {
  return pkgDir.sync(process.cwd()) || process.cwd();
}

export default getProjectRoot;
