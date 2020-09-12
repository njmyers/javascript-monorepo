import { readDirectorySync } from './utils';
import File, { FileDescriptor, Options } from './File';

/**
 * Looks up files within a directory and pass options to indicate the return
 * type. Options include returning relative or absolute paths, as well as
 * recursively looking in the directory, adding mime contentType and extension,
 * reading the contents of the file and filtering out files by extension.
 */
function directory(
  dir: string,
  options?: Options
): FileDescriptor[] | string[] {
  const files = readDirectorySync(dir, options).map(
    filePath => new File(filePath, options)
  );

  // @ts-ignore
  return files.map(file => file.getResponse()).filter(file => file !== null);
}

export default directory;
