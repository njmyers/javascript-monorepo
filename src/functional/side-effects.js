const sideEffects = (fn) => (arg) => {
	fn(arg);
	return arg;
};

export default sideEffects;
