import path from "path";

const removeLeadingSlash = pathString =>
  pathString.charAt(0) === path.sep
    ? removeLeadingSlash(pathString.slice(1))
    : pathString;

export default removeLeadingSlash;
