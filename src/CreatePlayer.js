/* global YT */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SubPub from './SubPub';

const CreatePlayer = (Wrapped) =>
    class PlayerWrapper extends Component {
        constructor(props) {
            super(props);
            this.onStateChange = new SubPub();
            this.onReady = new SubPub();
        }

        publishOnReady = (event) => this.onReady.publish(event);
        publishStateChange = (event) => this.onStateChange.publish(event);

        createPlayer = () => {
            /* grab from props or set defaults from YouTube docs
			/*	https://developers.google.com/youtube/player_parameters
			*/

            const width = this.props.width ? this.props.width : 640;
            const height = this.props.height ? this.props.height : 390;
            const videoId = this.props.videoId ? this.props.videoId : '';
            const playerVars = this.props.playerVars ? this.props.playerVars : {};

            /* YouTube Events - Two Options
			/* 1) register callbacks if provided by parents
			/* 2) offer subscription method in child component
			*/

            const onReady = this.props.onReady ? this.props.onReady : this.publishOnReady;
            const onStateChange = this.props.onStateChange
                ? this.props.onStateChange
                : this.publishStateChange;

            /* Create Player */
            this.player = new YT.Player(this.DOMNode, {
                width,
                height,
                // videoId,
                playerVars,
                events: {
                    onReady,
                    onStateChange,
                },
            });

            if (this.props.onPlayer) this.props.onPlayer(this.player);
        };

        /* React Lifecycle methods. These wait until API is properly loaded to create your player */
        componentWillReceiveProps(nextProps) {
            if (!this.props.API && nextProps.API) this.createPlayer();
        }

        componentDidMount() {
            this.DOMNode = ReactDOM.findDOMNode(this);
            if (this.props.API) this.createPlayer();
        }

        /* Don't Pass Props to Children if Parent Callbacks are Provided! */
        conditionalPassToChildren = () => {
            const props = {};
            if (!this.props.onReady) props.onReady = this.onReady;
            if (!this.props.onStateChange) props.onStateChange = this.onStateChange;
            if (!this.props.onPlayer) props.player = this.player;
        };

        render() {
            return (
                <div>
                    <Wrapped {...this.props} {...this.conditionalPassToChildren()} />;
                </div>
            );
        }
    };

export default CreatePlayer;
