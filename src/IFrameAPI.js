/* global YT */
import React, { Component } from 'react';

const IFrameAPI = (Wrapped) =>
    class IFrameAPIWrapper extends Component {
        constructor(props) {
            super(props);
            this.state = {
                API: false,
            };

            // register window callback must use arrow function
            window.onYouTubeIframeAPIReady = () => this.registerAPI();
        }

        registerAPI() {
            this.setState({
                API: true,
            });
        }

        downloadYouTubeAPI() {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }

        componentWillMount() {
            if (!window.YT) this.downloadYouTubeAPI();
            else this.registerAPI();
        }

        render() {
            return <Wrapped {...this.props} API={this.state.API} />;
        }
    };

export default IFrameAPI;
