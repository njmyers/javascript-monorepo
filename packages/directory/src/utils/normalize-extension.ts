/**
 * Normalize the name of an extension for comparison purposes
 *
 * @param extension - A file extension
 * @returns A file extension without any leading period characters
 */
function normalizeExtension(extension: string): string {
  return extension.startsWith('.')
    ? normalizeExtension(extension.slice(1))
    : extension;
}

export default normalizeExtension;
