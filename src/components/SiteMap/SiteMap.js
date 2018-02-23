import React from 'react';
import { Link } from 'react-router-dom';

import './site-map-default.css';

function Divider(props) {
	return <span className="site-map-divider">|</span>;
}

function scrollTop() {
	window.scroll({
		top: 0,
		left: 0,
	});
}

function SiteMap(props) {
	const pages = props.pages ? props.pages.filter((each) => each.label) : [];
	const parentClass = props.parentClass ? props.parentClass : 'site-map';
	const childClass = props.childClass ? props.childClass : 'site-map-item';

	const Links = pages.map((each, index) => {
		const to = `/${each.slug}`;
		return (
			<span key={each.slug}>
				<Link className={childClass} to={to} onClick={scrollTop}>
					<span>{each.label}</span>
				</Link>
				{index < pages.length - 1 ? <Divider /> : null}
			</span>
		);
	});

	return <nav className={parentClass}>{Links}</nav>;
}

export default SiteMap;
