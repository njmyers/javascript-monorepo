import { readDirectoryAsync } from './utils';
import File, { FileDescriptor, Options } from './File';

/**
 * Looks up files within a directory and pass options to indicate the return
 * type. Options include returning relative or absolute paths, as well as
 * recursively looking in the directory, adding mime contentType and extension,
 * reading the contents of the file and filtering out files by extension.
 */
async function directoryAsync(
  dir: string,
  options?: Options
): Promise<FileDescriptor[]> {
  const files = (await readDirectoryAsync(dir, options)).map(
    filePath => new File(filePath, options)
  );

  // @ts-ignore
  return (await Promise.all(files.map(file => file.getAsyncResponse()))).filter(
    file => file !== null
  );
}

export default directoryAsync;
