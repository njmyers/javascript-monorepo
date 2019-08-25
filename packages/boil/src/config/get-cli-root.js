import pkgDir from "pkg-dir";

/**
 * Get the root directory of this boil cli project. This is useful in the
 * interim as our source code may have a different structure as the final
 * compiled cli. Hopefully we won't have to use this in a future esm world.
 */
function getCliRoot() {
  return pkgDir.sync(__dirname);
}

export default getCliRoot;
