import padZero from './pad-zero';

const hours = (time: number): number => Math.floor(time / 3600);
const minutes = (time: number): number => Math.floor(time / 60);
const seconds = (time: number): number => Math.floor(time % 60);

const timeString = (char: string) => (time: number): string => {
  return !hours(time)
    ? `${minutes(time)}${char}${padZero(seconds(time))}`
    : `${hours(time)}${char}${padZero(minutes(time))}${char}${padZero(
        seconds(time)
      )}`;
};

export default timeString(':');
