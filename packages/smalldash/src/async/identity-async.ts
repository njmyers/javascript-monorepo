/**
 * Return a promise that returns the argument. This is the identity function and
 * will asynchronously return the argument that is passed in.
 */
function identityAsync<T>(arg: T): Promise<T> {
  return new Promise(resolve => resolve(arg));
}

export default identityAsync;
