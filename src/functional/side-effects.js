/**
 * This function performs sideEffects while returning the same value. Useful while composing flow so that your side effects are documented
 * @param {function} fn pass in a function to perform side effects while keeping the compositional flow of functional programming style
 * @param {args} arguments pass through argument
 */
const sideEffects = (fn) => (args) => {
	fn(args);
	return args;
};

export default sideEffects;
