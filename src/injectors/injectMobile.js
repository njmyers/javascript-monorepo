import React from 'react';

const createMobileChecker = (breakpoint) => (sizes) => {
	return sizes.window ? sizes.window.innerWidth < breakpoint : undefined;
};

const IsMobile = (breakpoint) => (Wrapped) => {
	const getMobile = createMobileChecker(breakpoint);

	return (props) => {
		return (
			<Wrapped
				{...props}
				sizes={{ ...props.sizes, mobile: getMobile(props.sizes), breakpoint }}
			/>
		);
	};
};

export default IsMobile;
