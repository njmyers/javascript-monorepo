/** Directory Options */
type Options = {
  /** boolean option to return mime information for all files: default false */
  mime: boolean,
  /** boolean option to return absolute paths for all files default: true */
  absolute: boolean,
  /** boolean option to search the directory recursively */
  recursive: boolean,
  /** boolean option to read the files and return the contents as a string */
  read: boolean,
  /** string or array of file types to filter (include) */
  filter: string | Array<string>,
};

/** Return Object */
type FileObject = {
  /** the path of the file */
  path: string,
  /** whether it was included (will always be true) */
  include: boolean,
  /** the mime information */
  mime?: {
    /** the content type ie text/css */
    contentType: string,
    /** the file extension with no leading period */
    extension: string,
  },
  /** the file contents */
  file?: string,
};

type Files = Array<string>;

export type { Options, FileObject, Files };
