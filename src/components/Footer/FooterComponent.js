import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import sizeMe from '../../utils/size-me';

import SiteMap from '../SiteMap';
import socialMap from './social-map';

import './footer-default.css';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.year = new Date().getFullYear();
		this.handleUpdate = debounce(this.handleUpdate.bind(this), 50);
	}

	handleUpdate() {
		this.props.updateContentSize(this.props.size);
	}

	componentDidUpdate() {
		this.handleUpdate();
	}

	render() {
		// const style = this.props.audioPlayer.display
		// 	? { marginBottom: `${this.props.audioPlayerSize.height}px` }
		// 	: {};

		const style = {};

		const socials = socialMap.map((social) => (
			<Icon key={social.link} fa={social.icon} link={social.link} />
		));

		const title = process.env.REACT_APP_SITE_TITLE;

		return (
			<footer className="footer" style={style}>
				<SiteMap pages={this.props.pages} />
				<p className="social">
					<span>Find us on </span>
					{socials}
				</p>
				<p className="footer-text">
					<i className="fa fa-code" /> Web Design by Nick Myers
				</p>
				<p className="footer-text">
					<i className="fa fa-copyright" /> {this.year} {title}
				</p>
			</footer>
		);
	}
}

export default sizeMe(Footer);

function Icon(props) {
	const fa = props.fa ? props.fa : 'home';
	const link = props.link ? props.link : '';
	const size = props.size ? props.size : '2x';

	const iconClass = `fa fa-${fa} fa-${size}`;

	return (
		<a href={link} target="_blank" rel="noreferrer noopener">
			<i className={iconClass} />
		</a>
	);
}
