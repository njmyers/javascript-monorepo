/* global ReactGA */

import React, { Component } from 'react';
import ReactGA from 'react-ga';
import debounce from 'lodash/debounce';
import listen from '../utils/listen';

import PageIndex from './PageIndex';

import Main from '../Main';
import ScrollTop from '../ScrollTop';
import Header from '../Header';
import Footer from '../Footer';

import './root-default.css';

class Root extends Component {
	constructor(props) {
		super(props);

		this.GA_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;
		ReactGA.initialize(this.GA_ID);
		ReactGA.pageview(window.location.pathname + window.location.search);

		this.resizeSubKey = 0;
		this.onResizeWindow = this.onResizeWindow.bind(this);
	}

	onResizeWindow() {
		this.props.windowDetector(window.innerWidth, window.innerHeight);
	}

	componentWillMount() {
		this.props.windowDetector(window.innerWidth, window.innerHeight);
		this.resizeSubKey = listen.resizeEvent.subscribe(this.onResizeWindow);
	}

	componentDidMount() {
		this.props.loadFacebookAPI();
	}

	componentWillUnmount() {
		listen.resizeEvent.unsubscribe(this.resizeSubKey);
	}

	render() {
		return (
			<div className="page">
				<Header pages={PageIndex} />
				<Main pages={PageIndex} />
				<Footer pages={PageIndex} />
			</div>
		);
	}
}

export default Root;
