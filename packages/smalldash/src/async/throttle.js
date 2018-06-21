const throttle = (fn, limit) => {
	let lastCall;
	let timestamp;

	return function(...args) {
		const call = () => fn.call(this, ...args);

		if (!timestamp) {
			call();
			timestamp = Date.now();
		} else {
			clearTimeout(lastCall);
			lastCall = setTimeout(() => {
				if (Date.now() - timestamp >= limit) {
					call();
					timestamp = Date.now();
				}
			}, limit - (Date.now() - timestamp));
		}
	};
};

export default throttle;
