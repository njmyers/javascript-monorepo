/**
 * Flatten a nested array of items up to infinite depth.
 *
 * @param array - A possibly nested array of items
 * @returns A non-nested array of items
 */
function flatten<T>(array: T): T[];

/** Overload for an array of depth one */
function flatten<T>(array: T[]): T[];

/** Overload for an array of depth two */
function flatten<T>(array: T[][]): T[];

/** Overload for an array of depth three */
function flatten<T>(array: T[][][]): T[];

/** Overload for an array of depth four */
function flatten<T>(array: T[][][][]): T[];

/** Overload for an array of depth five */
function flatten<T>(array: T[][][][][]): T[];

/** Overload for an array of depth six */
function flatten<T>(array: T[][][][][][]): T[];

/** Implementation */
function flatten<T>(array: T): T[] {
  const flattened: T[] = [];

  if (!Array.isArray(array)) {
    return flattened.concat(array);
  }

  array.forEach(item => {
    flattened.push(...flatten<T>(item));
  });

  return flattened;
}

export default flatten;
