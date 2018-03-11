import React, { Component } from 'react';
import ReactGA from 'react-ga';

import PageIndex from './PageIndex';

import AsyncLoader from '../Root/AsyncLoader';
import Main from '../Main';
import ScrollTop from '../ScrollTop';
import Header from '../Header';
import Footer from '../Footer';

import './root-default.sass';

import Size from 'react-size-components';

const Audio = AsyncLoader(() => import('../Audio'));

class Root extends Component {
	constructor(props) {
		super(props);

		this.GA_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;
		ReactGA.initialize(this.GA_ID);
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

	componentDidMount() {
		this.props.loadFacebookAPI();
	}

	render() {
		return (
			<React.Fragment>
				<Header pages={PageIndex} />
				<Main pages={PageIndex} />
				<Footer pages={PageIndex} />
				<Audio />
			</React.Fragment>
		);
	}
}

export default Root;
