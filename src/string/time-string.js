import validateDecimal from './validate-decimal';
import padZero from './pad-zero';

const hours = (time) => Math.floor(time / 3600);
const minutes = (time) => Math.floor(time / 60);
const seconds = (time) => Math.floor(time % 60);

const timeString = (char) => (time) => {
	const valid = validateDecimal(time);

	return !hours(time)
		? `${minutes(time)}${char}${padZero(seconds(time))}`
		: `${hours(time)}${char}${padZero(minutes(time))}${char}${padZero(seconds(time))}`;
};

export default timeString(':');
