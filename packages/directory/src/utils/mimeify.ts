import path from 'path';
import * as mime from 'mime-types';

import normalizeExtension from './normalize-extension';

export interface Mime {
  /** the content type ie text/css */
  contentType: string;
  /** the file extension with no leading period */
  extension: string;
}

/**
 * Add mime information to the file object
 *
 * @param filePath - A file path
 * @returns An object with mime information
 */
function mimeify(filePath: string): Mime {
  return {
    contentType: mime.lookup(filePath) || '',
    extension: normalizeExtension(path.extname(filePath)),
  };
}

export default mimeify;
