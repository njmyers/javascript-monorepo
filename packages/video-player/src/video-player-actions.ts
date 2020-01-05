// @ts-nocheck
// import generateActions from '../../utils/action-creator';
// import { hideAudioPlayer, stop as stopAudio } from '../AudioPlayer/audio-player-actions';
// import {
//   percentString,
//   formatTimes,
//   percentage,
//   findAspectHeight,
//   pixelString,
// } from '../../utils/strings';

const frameRate = 100;

const generateActions = t => t;
const percentString = t => t;
const formatTimes = t => t;
const percentage = t => t;
const findAspectHeight = t => t;
const pixelString = t => t;
const Modernizr = {};

const myActions = [
  {
    type: 'LOAD_VIDEO_OBJECT',
    key: 'object',
  },
  {
    type: 'LOAD_CONTAINER_OBJECT',
    key: 'container',
  },
  {
    type: 'VIDEO_PLAYER_STYLES',
    key: 'playerStyle',
  },
  {
    type: 'VIDEO_SRC',
    key: 'src',
  },
  {
    type: 'SHOW_VIDEO_PLAYER',
    key: 'display',
    value: true,
  },
  {
    type: 'HIDE_VIDEO_PLAYER',
    key: 'display',
    value: false,
  },
  {
    type: 'SAVE_VIDEO_INTERVAL',
    key: 'interval',
  },
  {
    type: 'STOP_VIDEO_INTERVAL',
  },
  {
    type: 'VIDEO_PLAY_STATE',
    key: 'playing',
  },
  {
    type: 'VIDEO_MUTE_STATE',
    key: 'muted',
  },
  {
    type: 'VIDEO_VOLUME',
    key: 'volume',
  },
  {
    type: 'VIDEO_LENGTH',
    key: 'length',
  },
  {
    type: 'VIDEO_CLOCK',
    key: 'clock',
  },
  {
    type: 'VIDEO_SEEK',
    key: 'seek',
  },
  {
    type: 'VIDEO_FRAME',
  },
  {
    type: 'UPDATE_VIDEO_ENCODING',
    key: 'encoding',
  },
];

const { actions, constants } = generateActions(myActions);

function validateEncoding(encoding) {
  const lookup = !encoding ? Modernizr.video : encoding;

  if (lookup.h264) return 'mp4';
  else if (lookup.ogg) return 'ogv';
  else if (lookup.webm) return 'webm';
  else return lookup;
}

function saveVideoEncoding() {
  return dispatch => {
    // else if creates cascading preference for mp4, ogv, webm
    if (Modernizr.video) {
      if (Modernizr.video.h264) {
        dispatch(actions.updateVideoEncoding('mp4'));
      } else if (Modernizr.video.ogg) {
        dispatch(actions.updateVideoEncoding('ogv'));
      } else if (Modernizr.video.webm) {
        dispatch(actions.updateVideoEncoding('webm'));
      }
    }
  };
}

/**
 * Store reference to video object and create styles
 */
function loadVideoPlayer() {
  return dispatch => {
    const object = document.getElementById('video_player');
    const container = document.getElementById('video_container');

    // store reference to HTML5 video object/container in redux store
    dispatch(actions.loadVideoObject(object));
    dispatch(actions.loadContainerObject(container));

    dispatch(resizeVideoPlayer());
  };
}

function resizeVideoPlayer() {
  return (dispatch, getState) => {
    const { container } = getState().videoPlayer;

    // calculate widths
    const numWidth = container.parentNode.clientWidth;
    let width, height;

    if (numWidth < 1440) {
      width = pixelString(numWidth);
      height = pixelString(findAspectHeight(numWidth));
      // } else if (numWidth < 1440) {
      // 	width = pixelString(numWidth * .48);
      // 	height = pixelString(findAspectHeight(numWidth * .48))
    } else {
      width = pixelString(numWidth); // * 0.657);
      height = pixelString(findAspectHeight(numWidth)); // * 0.657));
    }

    dispatch(actions.videoPlayerStyles({ width, height }));
  };
}

function loadVideo(id) {
  return (dispatch, getState) => {
    const {
      videos,
      videoPlayer,
      audioPlayer: { playing: playingAudio, display: displayAudio },
    } = getState();
    const { display, object, playing } = videoPlayer;

    const encoding = validateEncoding(videoPlayer.encoding);

    // bring up the video player
    if (!display) dispatch(actions.showVideoPlayer());
    if (playing) stop({ dispatch, state: videoPlayer });

    // stop audio
    if (playingAudio) dispatch(stopAudio());
    if (displayAudio) dispatch(hideAudioPlayer());

    const found = videos.data.find(video => video.id == id);
    const { url } = found.acf[encoding];

    // only method handled by react all other methods are executed directly on video object
    // use a promise to update src so that new methods can be called directly on new video state
    Promise.resolve(dispatch(actions.videoSrc(url)))
      .then(() => {
        const state = getState().videoPlayer;

        play({ dispatch, state });
        scroll({ state });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

// pass through function that routes buttons and pass-thru state/dispatch
// prevents writing thunks for each button action
function videoButton(event) {
  return (dispatch, getState) => {
    const { videoPlayer: state } = getState();

    const name = event.target.name;
    const value = event.target.value;

    if (process.env.NODE_ENV === 'development')
      console.log(`video button name: ${name}`);

    switch (name) {
      case 'play':
        return play({ state, dispatch });
      case 'pause':
        return pause({ state, dispatch });
      case 'stop':
        return stop({ state, dispatch });
      case 'volume':
        return setVolume({ state, dispatch, value });
      case 'fullscreen':
        return fullScreen({ state, dispatch });
      case 'mute':
        return mute({ state, dispatch });
      case 'seek':
        return seek({ state, dispatch, event });
      case 'default':
        return noButton();
    }
  };
}

function play({ dispatch, state } = {}) {
  const { object } = state;

  object.play();
  dispatch(actions.videoPlayState(true));

  // start interval save reference
  const interval = setInterval(frame(dispatch), frameRate);
  dispatch(actions.saveVideoInterval(interval));

  // initialize timer
  dispatch(actions.videoFrame({ counter: 0, time: new Date() }));
}

function pause({ dispatch, state } = {}) {
  const { object } = state;

  object.pause();
  dispatch(actions.videoPlayState(false));

  clearInterval(state.interval);
  dispatch(actions.stopVideoInterval());
}

function stop({ dispatch, state } = {}) {
  const { object, interval } = state;

  object.pause();
  object.currentTime = 0;
  dispatch(actions.videoPlayState(false));

  clearInterval(interval);
  dispatch(actions.stopVideoInterval());

  liveUpdates({ dispatch, seek: 0, duration: object.duration });
}

function mute({ dispatch, state } = {}) {
  const { object } = state;

  const muted = object.muted;
  object.muted = !muted;
  dispatch(actions.videoMuteState(!muted));
}

function setVolume({ value, dispatch, state } = {}) {
  const { object } = state;

  object.volume = value / 100;
  dispatch(actions.videoVolume(value));
}

function seek({ dispatch, state, event } = {}) {
  const { object } = state;
  const { value } = event.target;

  const seek = (value / 1000) * object.duration;

  object.currentTime = seek;
  liveUpdates({ dispatch, seek, duration: object.duration });
}

function liveUpdates({ dispatch, duration, seek } = {}) {
  dispatch(actions.videoClock(formatTimes(seek)));
  dispatch(actions.videoSeek(percentage(seek, duration)));
}

function scroll({ state } = {}) {
  const { container } = state;

  container.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  });
}

function fullScreen({ dispatch, state } = {}) {
  const { object } = state;

  if (object.webkitRequestFullscreen && !object.fullscreenEnabled) {
    object.webkitRequestFullscreen();
  } else {
    object.webkitExitFullscreen();
  }
}

function noButton() {
  console.log('no button action specified');
}

// the frame

function frame(dispatch) {
  // create arrow function with to mantain scope this is returned to interval
  const intervalClosure = () => {
    // when interval fires dispatch another anonymous function that thunk can finally deal with
    // we have to have closure over dispatch inside of the interval
    dispatch((dispatch, getState) => {
      const state = getState().videoPlayer;

      let { counter, time, object, videoLength } = state;
      let newTime = new Date();
      let difference = newTime - time;
      counter += difference;

      if (counter > 1000 || Math.abs(counter - 1000) < 6) {
        // if video finishes playing on it's own then stop the interval
        if (object.ended) {
          stop({ dispatch, state });
        } else {
          const duration = object.duration;
          const seek = object.currentTime;

          // track length doesn't update if video file hasn't loaded let's just load it when it's ready
          if (videoLength == '0:00' || typeof videoLength !== 'string')
            dispatch(actions.videoLength(formatTimes(duration)));

          // update meter, clock, etc...
          liveUpdates({ dispatch, seek, duration });

          // reset counter for another second
          counter = 0;
        }
      }

      dispatch(actions.videoFrame({ counter, time: newTime }));
    });
  };

  // return like this so we can name our arrow function
  return intervalClosure;
}

export {
  constants,
  actions,
  videoButton,
  resizeVideoPlayer,
  loadVideoPlayer,
  loadVideo,
  saveVideoEncoding,
};
