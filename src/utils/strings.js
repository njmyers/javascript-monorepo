export function percentString(x, y) {
	const number = percentage(x, y).toString() + '%';
	return number;
}

export function formatTimes(number) {
	// do not return NaN as value
	if (Number.isNaN(number)) {
		return '0:00';
	}

	const x = Math.round(number);

	let minutes = Math.floor(x / 60);
	let seconds = Math.floor(x % 60);

	// pad seconds
	if (seconds < 10) seconds = '0' + seconds;

	return `${minutes}:${seconds}`;
}

export function percentage(x, y) {
	const numX = ensureNumber(x);
	const numY = ensureNumber(y);
	const result = Math.round(numX / numY * 1000);

	if (Number.isNaN(result)) return 0;
	else return result;
}

export function findAspectHeight(width) {
	return width * 720 / 1280;
}

export function pixelString(x) {
	const numX = ensureNumber(x);
	return `${Math.round(numX)}px`;
}

export function ensureNumber(number) {
	if (Number.isNaN(number)) return 0;
	else if (typeof number === 'string') return parseInt(number, 10);
	else if (typeof number === 'number') return number;
}
