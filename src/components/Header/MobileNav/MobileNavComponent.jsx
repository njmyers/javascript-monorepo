import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './mobile-nav.css';

class MobileNav extends Component {
	render() {
		const Links = this.props.pages
			.filter((each) => Object.keys(each).includes('label'))
			.map((each) => {
				const to = `/${each.slug}`;
				return (
					<Link
						key={each.slug}
						className="menu-item"
						to={to}
						onClick={this.props.menuOff}
					>
						<span>{each.label}</span>
					</Link>
				);
			});

		return (
			<nav style={this.props.UI.mobileMenuStyle} className="mobile-menu">
				{Links}
			</nav>
		);
	}
}

export default MobileNav;
