import path from 'path';
import * as mime from 'mime-types';

import normalizeExtension from './normalize-extension';
import { FileObject } from '../types';

/**
 * Add mime information to the file object
 *
 * @param fileObject - A file object
 * @returns The file object with mime information added
 */
function mimeify(fileObject: FileObject): FileObject {
  if (!fileObject.path) {
    throw new Error('Tried to access a path that does not exist');
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
