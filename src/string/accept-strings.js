const acceptStrings = (input) => {
	if (typeof input !== 'string')
		throw new Error(
			`The function only accepts input of type: string. You submitted input of type: ${typeof input}`
		);
	return input;
};

export default acceptStrings;
