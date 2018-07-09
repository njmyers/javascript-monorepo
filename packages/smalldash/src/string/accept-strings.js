/**
 * Throws an error if type other then string is used as argument
 * @param  {[type]} input [description]
 * @return {[type]}       [description]
 */
const acceptStrings: string = (input: string) => {
  if (typeof input !== 'string')
    throw new Error(
      `The function only accepts input of type: string. You submitted input of type: ${typeof input}`
    );

  return input;
};

export default acceptStrings;
