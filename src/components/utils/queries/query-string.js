const queryString = (query) => {
	return Object.keys(query)
		.map((key) => `${key}=${query[key]}`)
		.reduce((acc, curr, index) => (index === 0 ? `?${curr}` : `${acc}&${curr}`), undefined);
};

export default queryString;
