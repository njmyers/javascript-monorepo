# React YouTube Component

A thin wrapper around the [YouTube IFrame API](https://developers.google.com/youtube/iframe_api_reference). The goal is to make it easier to use the API in a react centered way. The component creates two HOC wrappers. One that downloads the API and another that creates a player for you. The player is not wrapped in any way so you can use the [IFframe API documentation](https://developers.google.com/youtube/iframe_api_reference) directly on your YouTube player object to load videos, create playlists and show your content.

Control of the player can be managed by one of two ways.

1.  Parent Element
2.  Child Element

## Installation

Install using npm `npm install --save react-youtube-component`;

Use in your react project.

```js
const createYouTube = require('react-youtube-component');
import createYouTube from 'react-youtube-component';
```

## Usage

### Parent Element

Create your component. Then use it as component. Add your parameters as according to the [API specification](https://developers.google.com/youtube/player_parameters)

```js
const YouTube = createYouTube();

class Page extends Component {
    constructor(props) {
        super(props);
        this.playerVars = {
            autoplay: 0,
            color: 0,
            controls: 1,
            // add as you wish
        };
    }

    render() {
        return (
            <YouTube height="640" width="390" videoId="h_D3VFfhvs4" playerVars={this.playerVars} />
        );
    }
}
```

Interact with your component. Register event callbacks and/or save a reference to the player object so you can call methods directly

```js
const YouTube = createYouTube();

class Page extends Component {
    constructor(props) {
        super(props);
        this.playerVars = {
            autoplay: 0,
            color: 0,
            controls: 1,
            // add as you wish
        };
    }

    onStateChange = (event) => {
        // do something with the state change event
    };

    onReady = (event) => {
        // your player is now ready
    };

    onPlayer = (player) => {
        // save your player reference for later
        this.player = player;
    };

    onClick = (event) => {
        // interact with your player using javascript methods
        if (this.player) this.player.loadVideoById('Zi_XLOBDo_Y');
    };

    render() {
        return (
            <div>
                <YouTube
                    height="640"
                    width="390"
                    videoId="h_D3VFfhvs4"
                    playerVars={this.playerVars}
                    onStateChange={this.onStateChange}
                    onReady={this.onReady}
                    onPlayer={this.onPlayer}
                />
                <button onClick={this.onClick}>Load Another Video</button>
            </div>
        );
    }
}
```

### Child Element

You can also pass in a component to the createYouTube function. This component will have access to the player via props. It will have access to the player events via subscriptions which return an unsubscribe function. Be sure not to pass anything in your render method or it will be overwritten by the `<iframe>`.

```js
class Video extends Component {
	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {
		// component receives props from it's parent or redux or somewhere
		this.props.player.loadVideoById(nextProps.videoId);
	}

	onStateChange = (event) => {
		// do something with state change
	};

	onReady = (event) => {
		// video is ready. start playing or do something fun
		this.props.player.loadVideoById('Zi_XLOBDo_Y');
	};

	componentDidMount() {
		this.unsubscribeOnStateChange = this.props.onStateChange.subscribe(this.onStateChange);
		this.unsubscribeOnReady = this.props.onReady.subscribe(this.onReady);
	}

	componentWillUnmount() {
		this.unsubscribeOnStateChange();
		this.unsubscribeOnReady();
	}

	render() {
		return null;
		// this would be overwritten
		// return <p>some text</p>
	}
}

const YouTube = createYouTube(Video);

// then just use it in your parent

class VideoList extends Component {
	constructor(props) {
		super{props}
	}

	render() {
		return <YouTube />;
	}
}
```

Also be sure not to pass any callbacks via the parent or the similar child functionality will not work. If you pass `onPlayer` to the component then `this.props.player` will not be available.

_Don't Do This_

```js
class Video extends Component {
	constructor(props) {
		super{props}
	}

	componentWillRecieveProps(nextProps) {
		// This is NOT availble because we passed onPlayer in the parent component below
		this.props.player.loadVideo(nextProps.videoId);
	}

	render() {
		return null;
	}
}

const YouTube = createYouTube(Video);

// elsewhere in parent

class VideoList extends Component {
	constructor(props) {
		super{props}
	}

	onPlayer = (player) => {
		this.player = player;
	};

	render() {
		return <YouTube onPlayer={this.onPlayer} />;
	}
}
```

Overall this will reinforce a better project structure. You shouldn't be controlling the player from both parent and from within the player as well.
