import path from 'path';
import mime from 'mime-types';

import normalizeExtension from './normalize-extension';
// types
import { FileObject } from '../types';

/**
 * Adds mime information to the fileObject. This information includes the
 * contentType as well as the file extension without any leading period
 * characters
 */
function mimeify(fileObject: FileObject): FileObject {
  if (!fileObject.path) {
    throw new Error('Tried to access a the property path that does not exist');
  }

  return {
    ...fileObject,
    mime: {
      contentType: mime.lookup(fileObject.path) || '',
      extension: normalizeExtension(path.extname(fileObject.path)),
    },
  };
}

export default mimeify;
