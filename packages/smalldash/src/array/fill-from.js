export const fillFrom = (increment) => (arr = []) => (start = 0, end) =>
  start <= end
    ? fillFrom(increment)([...arr, start])(start + increment, end)
    : arr;

export default fillFrom(1)();
