import React from 'react';
import SiteMap from './SiteMap';
import Socials from './Socials';

import socialMap from './social-map';
import Size from 'react-size-components';

import './footer-default.sass';

const Footer = ({ pages } = {}) => {
	const year = new Date().getFullYear();

	// const style = this.props.audioPlayer.display
	// 	? { marginBottom: `${this.props.audioPlayerSize.height}px` }
	// 	: {};

	const style = {};

	const title = process.env.REACT_APP_SITE_TITLE;

	return (
		<footer className="footer" style={style}>
			<SiteMap pages={pages} />
			<Socials socialMap={socialMap} />
			<p className="footer__text">
				<i className="fa fa-code footer__icon" /> Web Design by{' '}
				<a
					className="footer__link"
					href="https://www.linkedin.com/in/nickmyersnyc/"
					rel="noopener noreferrer"
				>
					Nick Myers
				</a>
			</p>
			<p className="footer__text">
				<i className="fa fa-copyright footer__icon" /> {year} {title}
			</p>
		</footer>
	);
};

export default Size()(Footer);
