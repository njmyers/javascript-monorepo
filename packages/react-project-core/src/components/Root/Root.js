import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  updateContentSize,
  updateOrientation,
  updateIsMobile,
} from './ui-sizing-actions';

import ReactGA from 'react-ga';

import PageIndex from './PageIndex';

import AsyncLoader from '../Root/AsyncLoader';
import Main from '../Main';
import Header from '../Header';
import Footer from '../Footer';

import './root-default.sass';

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
    this.loadGA();
  }

  /* Callback for child sizes */
  handleSize(sizes) {
    const { id, clientRect } = sizes;
    const { height } = clientRect;
    if (this.props.UI[id].height !== height) {
      this.props.updateContentSize(sizes.id, { height });
    }

    if (id === 'contentSize') this.handleMain(sizes);
  }

  /* Handle Main Sizes */
  handleMain(sizes) {
    const { isMobile, orientation } = sizes;
    if (isMobile !== this.props.UI.isMobile)
      this.props.updateIsMobile(isMobile);
    if (orientation !== this.props.UI.orientation)
      this.props.updateOrientation(orientation);
  }

  render() {
    return (
      <React.Fragment>
        <Header pages={PageIndex} onSize={this.handleSize} id="headerSize" />
        <Main pages={PageIndex} onSize={this.handleSize} id="contentSize" />
        <Footer pages={PageIndex} onSize={this.handleSize} id="footerSize" />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  UI: state.UI,
  audioPlayer: state.audioPlayer,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateContentSize: (key, payload) =>
    dispatch(updateContentSize(key)(payload)),
  updateOrientation: (payload) => dispatch(updateOrientation(payload)),
  updateIsMobile: (payload) => dispatch(updateIsMobile(payload)),
});

const sizes = {
  isMobile: true,
  orientation: true,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Root)
);