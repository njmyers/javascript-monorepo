import createScriptLoader from '@njmyers/script-loader';

const youTubeIframeAPIPromise = new Promise<Window['YT']>(resolve => {
  window.onYouTubeIframeAPIReady = (): void => {
    resolve(window.YT);
  };
});

const loadYouTubeAPI = createScriptLoader({
  id: 'youtube',
  src: '//www.youtube.com/iframe_api',
  initialize: (): Promise<Window['YT']> => youTubeIframeAPIPromise,
});

export default loadYouTubeAPI;
