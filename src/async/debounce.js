/**
 * Debounce function to control the number of function calls
 * @param {function} fn the function to debounce
 * @param {number} wait number of milliseconds to wait
 * @param {boolean} leading whether to call the function on the leading edge
 */
const debounce = (fn, wait = 1000, leading = false) => {
	let timeout;

	return function(...args) {
		// establish context
		const context = this;
		// call
		const call = () => fn.apply(context, args);
		// call on leading edge
		if (leading && !timeout) call();
		// clear previous timeout
		clearTimeout(timeout);
		// set timeout for next call
		timeout = setTimeout(call, wait);
	};
};

export default debounce;
