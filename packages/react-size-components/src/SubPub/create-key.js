/** @flow */
const createKey = () =>
  Math.random()
    .toString(16)
    .slice(-8);

export default createKey;
