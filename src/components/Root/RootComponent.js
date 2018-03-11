/* global ReactGA */

import React, { Component } from 'react';
import ReactGA from 'react-ga';
import debounce from 'lodash/debounce';
import { resizeWindow } from '../../utils/listen';

import PageIndex from './PageIndex';

import AsyncLoader from '../Root/AsyncLoader';
import Main from '../Main';
import ScrollTop from '../ScrollTop';
import Header from '../Header';
import Footer from '../Footer';

import './root-default.sass';

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
			<div className="page">
				<Header pages={PageIndex} />
				<Main pages={PageIndex} />
				<Footer pages={PageIndex} />
				<Audio />
			</div>
		);
	}
}

export default Root;
