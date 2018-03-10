import debounce from 'lodash.debounce';

function SubPub() {
	const subscribers = {};

	function createKey() {
		return Math.random()
			.toString(16)
			.slice(-8);
	}

	return Object.seal({
		subscribe: (subscriber) => {
			const key = createKey();
			subscribers[key] = subscriber;
			return { unsubscribe: () => delete subscribers[key] };
		},

		publish: (args) => {
			for (let sub in subscribers) {
				try {
					subscribers[sub](args);
				} catch (ignore) {
					if (process.env.NODE_ENV === 'development') console.log(ignore);
				}
			}
		},
	});
}

export default (object) => (eventType) => (fn = debounce, ...args) => {
	const listener = new SubPub();
	object.addEventListener(
		eventType,
		fn((event) => {
			listener.publish(event);
		}, ...args)
	);
	return listener;
};
