import mapRight from './map-right';

const mapLeft = (...fns) => mapRight(...fns.reverse());

export default mapLeft;
