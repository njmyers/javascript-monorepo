import path from 'path';

const removeLeadingSlash = (pathString: string): string =>
  pathString.startsWith(path.sep)
    ? removeLeadingSlash(pathString.slice(1))
    : pathString;

export default removeLeadingSlash;
