const toPascal = (seperator) => (str) =>
  str
    .split(seperator)
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    .join('');

export default toPascal;
