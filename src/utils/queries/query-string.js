const queryString = (query) => {
	const keys = Object.keys(query);

	return keys.includes('id')
		? `/${query.id}`
		: keys
				.map((key) => `${key}=${query[key]}`)
				.reduce(
					(acc, curr, index) => (index === 0 ? `?${curr}` : `${acc}&${curr}`),
					undefined
				);
};

export default queryString;
