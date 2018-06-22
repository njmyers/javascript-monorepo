import React from 'react';
import { Link } from 'react-router-dom';

import './site-map-default.sass';

const Divider = ({ className = 'site-map__divider' } = {}) => {
	return <span className={className}>|</span>;
};

const scrollTop = () => window.scroll({ top: 0, left: 0 });

function SiteMap({ pages, parentClass = 'site-map', childClass = 'site-map__link' } = {}) {
	const validPages = pages.filter((each) => each.label);

	const Links = validPages.map((each, index) => {
		const to = `/${each.slug}`;
		return (
			<React.Fragment key={each.slug}>
				<Link className={childClass} to={to} onClick={scrollTop}>
					<span className="site-map__label">{each.label}</span>
				</Link>
				{index < validPages.length - 1 ? <Divider /> : null}
			</React.Fragment>
		);
	});

	return <nav className={parentClass}>{Links}</nav>;
}

export default SiteMap;
