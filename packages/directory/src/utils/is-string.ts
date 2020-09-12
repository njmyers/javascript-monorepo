/**
 * Return if a value is a string
 *
 * @param value - A value to test
 * @returns Boolean indicating if the value is string
 */
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export default isString;
