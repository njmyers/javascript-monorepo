// @ts-nocheck

/**
 * Flatten a nested array up to a given depth.
 */
function flatten(array: unknown[], depth = Infinity, currentDepth = 0): any[] {
  return Array.isArray(array)
    ? [].concat(...array.map(thing => flatten(thing, depth, currentDepth + 1)))
    : [].concat(array);
}

export default flatten;
