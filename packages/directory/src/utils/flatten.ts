/**
 * Flatten a nested array up to a given depth.
 */
function flatten(
  array: any[],
  depth: number = Infinity,
  currentDepth: number = 0
): any[] {
  return Array.isArray(array)
    ? [].concat(...array.map(thing => flatten(thing, depth, currentDepth + 1)))
    : [].concat(array);
}

export default flatten;
