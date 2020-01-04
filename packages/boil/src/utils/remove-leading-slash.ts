import path from 'path';

const removeLeadingSlash = (pathString: string): string =>
  pathString.startsWith(0) === path.sep
    ? removeLeadingSlash(pathString.slice(1))
    : pathString;

export default removeLeadingSlash;
