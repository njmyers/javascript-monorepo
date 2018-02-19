import React from 'react';

import './spinner.css';

export default function Spinner(props) {
	return (
		<div className="loading">
			<i className="fa fa-spinner fa-spin fa-5x fa-fw" />
		</div>
	);
}
