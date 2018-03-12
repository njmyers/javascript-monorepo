import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { menuOff } from '../menu-actions';

import './mobile-nav-default.sass';

const MobileNav = ({ pages, mobileMenuStyle, menuOff } = {}) => {
	const Links = pages.filter((each) => Object.keys(each).includes('label')).map((each) => {
		const to = `/${each.slug}`;
		return (
			<Link key={each.slug} className="mobile-menu__item" to={to} onClick={menuOff}>
				<span>{each.label}</span>
			</Link>
		);
	});

	return (
		<nav style={mobileMenuStyle} className="mobile-menu">
			{Links}
		</nav>
	);
};

const scrollTop = () => window.scroll({ top: 0, left: 0 });

const mapStateToProps = (state) => ({
	mobileMenuStyle: state.menu.mobileMenuStyle,
});

const mapDispatchToProps = (dispatch) => ({
	menuOff: () => {
		scrollTop();
		dispatch(menuOff());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileNav);
