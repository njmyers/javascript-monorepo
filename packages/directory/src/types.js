export type Files = Array<string>;

export type Mime = {
  contentType: string,
  extension: string,
};

export type FileObject = {
  path: string,
  mime?: Mime,
  file?: string,
};

export type Options = {
  mime: boolean,
  absoultePath: boolean,
  recursive: boolean,
  read: boolean,
};
