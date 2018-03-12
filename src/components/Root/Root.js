import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateContentSize } from './ui-sizing-actions';
import { loadFacebookAPI } from '../Facebook/facebook-actions';
import { withRouter } from 'react-router-dom';

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

		this.handleSize = this.handleSize.bind(this);
	}

	loadGA() {
		const GA_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_ID;
		ReactGA.initialize(GA_ID);
		ReactGA.pageview(window.location.pathname + window.location.search);
	}

	componentDidMount() {
		this.props.loadFacebookAPI();
		this.loadGA;
	}

	handleSize(size) {
		const { id, clientRect } = size;
		const { height } = clientRect;
		if (this.props.UI[id].height !== height) {
			this.props.updateContentSize(size.id, { height });
		}
	}

	render() {
		return (
			<React.Fragment>
				<Header pages={PageIndex} cb={this.handleSize} id="headerSize" />
				<Main pages={PageIndex} cb={this.handleSize} id="contentSize" />
				<Footer pages={PageIndex} cb={this.handleSize} id="footerSize" />
				<Audio />
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	UI: state.UI,
	audioPlayer: state.audioPlayer,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	updateContentSize: (key, payload) => dispatch(updateContentSize(key)(payload)),
	loadFacebookAPI: () => dispatch(loadFacebookAPI()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));
