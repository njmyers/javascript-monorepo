import throttle from 'lodash.throttle';
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
			return key;
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

		unsubscribe: (key) => {
			delete subscribers[key];
		},
	});
}

const listen = {};

listen.resizeEvent = new SubPub();
listen.scrollEvent = new SubPub();

window.addEventListener(
	'resize',
	debounce((event) => {
		listen.resizeEvent.publish(event);
	}, 500)
);

window.addEventListener(
	'scroll',
	throttle((event) => {
		listen.scrollEvent.publish(event);
	}, 400)
);

export default listen;
