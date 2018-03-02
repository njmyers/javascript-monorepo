import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import sizeMe from '../../utils/size-me';

import Nav from './Nav';
import Title from './Title';
import MobileNav from './MobileNav';

import './header-default.css';

class Header extends Component {
	constructor(props) {
		super(props);
		this.handleUpdate = debounce(this.handleUpdate.bind(this), 50);
	}

	handleUpdate() {
		this.props.updateContentSize(this.props.size);
	}

	componentDidUpdate() {
		this.handleUpdate();
	}

	render() {
		const title = process.env.REACT_APP_SITE_TITLE;

		if (this.props.isMobile) {
			return (
				<header className="mobile-header-container">
					<div className="mobile-header">
						<i
							className="fa fa-bars fa-large hamburger"
							onClick={this.props.isMenuOn ? this.props.menuOff : this.props.menuOn}
						/>
						<div className="title">
							<Title text={title} />
						</div>
					</div>
					<MobileNav pages={this.props.pages} />
				</header>
			);
		} else {
			return (
				<header className="header">
					<div className="title">
						<Title text={title} />
						<Nav pages={this.props.pages} />
					</div>
				</header>
			);
		}
	}
}

export default sizeMe(Header);
