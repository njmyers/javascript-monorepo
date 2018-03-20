export const fillBy = (increment) => (arr = []) => (start = 0, end) =>
	start <= end ? fillBy(increment)([...arr, start])(start + increment, end) : arr;

export default fillBy(1)();
