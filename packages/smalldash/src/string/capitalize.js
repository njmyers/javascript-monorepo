/**
 * @param {string} str input string
 * @param {string} split split or character to split string at
 */
const capitalize = (str, split = ' ') =>
  str
    .split(split)
    .map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
    .join(split);

export default capitalize;
