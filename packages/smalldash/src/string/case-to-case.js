const caseToCase = (firstSeperator) => (secondSeperator) => (str) =>
	str.split(firstSeperator).join(secondSeperator);

export default caseToCase;
