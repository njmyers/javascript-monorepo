import React from 'react';
import Size from '../../src';

const WhatIsMyOrientation = ({ sizes } = {}) => {
	return (
		<React.Fragment>
			<h2>Child Component</h2>
			<p>My orientation is: {sizes.orientation}</p>
		</React.Fragment>
	);
};

export default Size({ orientation: true })(WhatIsMyOrientation);
