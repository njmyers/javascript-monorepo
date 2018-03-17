const fill = (fn) => (arr = []) => (num, val = 0) =>
	!num ? arr : fill(fn)([...arr, val])(num - 1, fn(val));

export default fill;
