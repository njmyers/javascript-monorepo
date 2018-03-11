import React, { Component } from 'react';
import { connect } from 'react-redux';
import Size from 'react-size-components';

import Nav from './Nav';
import Title from './Title';
import MobileNav from './MobileNav';

import { menuOn, menuOff } from './menu-actions';

import './header-default.sass';

const title = process.env.REACT_APP_SITE_TITLE;

const MobileHeaderMarkup = ({ isMenuOn, menuOff, menuOn, pages } = {}) => {
	const icon = isMenuOn ? 'times' : 'bars';
	const iconClass = `fa fa-${icon} fa-lg hamburger`;

	const style = {}; //isMenuOn ? { borderBottom: 'white 1px solid' } : null;
	return (
		<React.Fragment>
			<header className="header-container" style={style}>
				<div className="mobile-header">
					<button className={iconClass} onClick={isMenuOn ? menuOff : menuOn} />
					<span className="title">
						<Title text={title} />
					</span>
				</div>
			</header>
			<MobileNav pages={pages} />
		</React.Fragment>
	);
};

const HeaderMarkup = ({ isMobile, isMenuOn, menuOn, menuOff, pages }) => {
	return (
		<header className="header-container">
			<div className="header">
				<div className="title">
					<Title text={title} />
					<Nav pages={pages} />
				</div>
			</div>
		</header>
	);
};

const mapStateToProps = (state) => ({
	isMenuOn: state.menu.isMenuOn,
	isMobile: state.UI.isMobile,
});

const mapDispatchToProps = (dispatch) => ({
	menuOn: () => dispatch(menuOn()),
	menuOff: () => dispatch(menuOff()),
});

const MobileHeader = connect(mapStateToProps, mapDispatchToProps)(MobileHeaderMarkup);
const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderMarkup);

const HeaderContainer = ({ isMobile, pages } = {}) => {
	return !isMobile ? <Header pages={pages} /> : <MobileHeader pages={pages} />;
};

export default connect(mapStateToProps)(HeaderContainer);
