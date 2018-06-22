import React from 'react';
import { Link } from 'react-router-dom';

import './nav-default.sass';

function Nav(props) {
	// const style = {
	// 	width: `${90 / props.pages.length}%`,
	// };

	const Links = props.pages.filter((each) => Object.keys(each).includes('label')).map((each) => {
		const to = `/${each.slug}`;
		return (
			<Link key={each.slug} className="menu__item" to={to}>
				<span>{each.label}</span>
			</Link>
		);
	});

	return <nav className="menu">{Links}</nav>;
}

export default Nav;
