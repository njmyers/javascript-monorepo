const fillWith = (arr = []) => (num, val = 0) =>
	!num ? arr : fillWith([...arr, val])(num - 1, val);

export default fillWith();
