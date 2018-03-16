const debounce = (fn, time) => {
	let timeout;

	return function(...args) {
		const call = () => fn.call(this, ...args);

		clearTimeout(timeout);
		timeout = setTimeout(call, time);
	};
};

export default debounce;
