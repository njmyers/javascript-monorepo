import React from 'react';
import LoremIpsum from './LoremIpsum';

const Headings = () => {
	return (
		<React.Fragment>
			<h1>Heading 1</h1>
			<LoremIpsum />
			<h2>Heading 2</h2>
			<LoremIpsum />
			<h3>Heading 3</h3>
			<LoremIpsum />
			<h4>Heading 4</h4>
			<LoremIpsum />
			<h5>Heading 5</h5>
			<LoremIpsum />
			<h6>Heading 6</h6>
			<LoremIpsum />
		</React.Fragment>
	);
};

export default Headings;
