import React from 'react';
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
	const iconClass = `fa fa-${icon} fa-lg mobile-header__hamburger`;

	const style = {}; //isMenuOn ? { borderBottom: 'white 1px solid' } : null;
	return (
		<React.Fragment>
			<div className="mobile-header__container" style={style}>
				<header className="mobile-header">
					<button className={iconClass} onClick={isMenuOn ? menuOff : menuOn} />
					<Title text={title} />
				</header>
			</div>
			<MobileNav pages={pages} />
		</React.Fragment>
	);
};

const HeaderMarkup = ({ isMobile, isMenuOn, menuOn, menuOff, pages }) => {
	return (
		<div className="header__container">
			<header className="header">
				<Title text={title} />
				<Nav pages={pages} />
			</header>
		</div>
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

export default connect(mapStateToProps)(Size()(HeaderContainer));
