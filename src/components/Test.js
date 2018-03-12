import React, { Component } from 'react';
import Size from 'react-size-components';

import Headings from './Scratch/Headings';
import LoremIpsum from './Scratch/LoremIpsum';

const SizedLorem = Size({
	minMaxHeight: true,
})(LoremIpsum);

const Parent = (props) => {
	const log = (sizes) => console.log(sizes);

	return (
		<React.Fragment>
			<Headings />
			<SizedLorem cb={log} id={5} />
			<LoremIpsum repeat={6} />
		</React.Fragment>
	);
};

export default Parent;
