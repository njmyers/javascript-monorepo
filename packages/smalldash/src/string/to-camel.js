const toCamel = (seperator) => (str) =>
	str
		.split(seperator)
		.map(
			(word, i) =>
				i !== 0
					? word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()
					: word.toLowerCase()
		)
		.join('');

export default toCamel;
