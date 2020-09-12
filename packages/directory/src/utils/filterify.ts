import normalizeExtension from './normalize-extension';
import { FileObject } from '../types';

/**
 * Filters the files by file types. Instead of running a filter function we map
 * through all files and add a boolean include property to the file object. This
 * makes it easier to conditionally include the filtering at runtime.
 */
function filterify(fileTypeOrTypes: string | Array<string>) {
  return (fileObject: FileObject): FileObject => {
    if (!fileObject.mime) {
      throw new Error('Tried to access a mime type that do not exist');
    }

    const { extension } = fileObject.mime;

    return {
      ...fileObject,
      include: Array.isArray(fileTypeOrTypes)
        ? fileTypeOrTypes.map(normalizeExtension).includes(extension)
        : extension === normalizeExtension(fileTypeOrTypes),
    };
  };
}
export default filterify;
