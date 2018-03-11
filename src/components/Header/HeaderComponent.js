import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from './Nav';
import Title from './Title';
import MobileNav from './MobileNav';

import Size from './';

import { menuOn, menuOff } from '../Root/mobile-actions';

import './header-default.sass';

const title = process.env.REACT_APP_SITE_TITLE;

const MobileHeaderMarkup = ({ isMenuOn, menuOff, menuOn, pages } = {}) => {
	return (
		<header className="mobile-header-container">
			<div className="mobile-header">
				<i
					className="fa fa-bars fa-large hamburger"
					onClick={isMenuOn ? menuOff : menuOn}
				/>
				<div className="title">
					<Title text={title} />
				</div>
			</div>
			<MobileNav pages={pages} />
		</header>
	);
};

const HeaderMarkup = ({ isMobile, isMenuOn, menuOn, menuOff, pages }) => {
	return (
		<header className="header">
			<div className="title">
				<Title text={title} />
				<Nav pages={pages} />
			</div>
		</header>
	);
};

const mapStateToProps = (state) => ({
	isMenuOn: state.UI.isMenuOn,
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

export default HeaderContainer;
