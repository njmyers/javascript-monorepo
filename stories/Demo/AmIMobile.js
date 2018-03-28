import React from 'react';
import Size from '../../src';

const AmIMobile = ({ sizes } = {}) => {
	return (
		<React.Fragment>
			<h2>Child Component</h2>
			<p>Am I mobile: {sizes.mobile !== undefined ? sizes.mobile.toString() : null}</p>
			<p>My breakpoint is: {sizes.breakpoint}</p>
		</React.Fragment>
	);
};

export default Size({ mobile: true })(AmIMobile);
