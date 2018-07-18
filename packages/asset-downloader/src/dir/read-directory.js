import { compose } from 'smalldash';
import readDirectoryKeys from './read-directory-keys';
import validateKey from './validate-key';
import createDirectoryObject from './create-directory-object';
import addCacheControl from './add-cache-control';
import addContentType from './add-content-type';
import addContentLength from './add-content-length';
import addContentStream from './add-content-stream';

const addProperties = compose(
  addCacheControl,
  addContentType,
  addContentLength,
  addContentStream,
  validateKey,
  createDirectoryObject
);

const readDirectory = (dir) =>
  readDirectoryKeys(dir).map((string) => addProperties(string));

export default readDirectory;
