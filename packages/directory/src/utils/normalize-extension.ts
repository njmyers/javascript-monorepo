/**
 * Normalize the name of an extension for comparison purposes
 * Remove all leading periods from extension names
 * Then we can safely compare to the output from mime.extension
 */
function normalizeExtension(ext: string): string {
  return ext.startsWith('.') ? normalizeExtension(ext.slice(1)) : ext;
}

export default normalizeExtension;
