import createScriptLoader from '@njmyers/script-loader';

const loadYouTubeAPI = createScriptLoader({
  id: 'youtube',
  src: 'https://www.youtube.com/iframe_api',
  initialize: (window: Window): Promise<Window['YT']> =>
    new Promise(res => {
      window.onYouTubeIframeAPIReady = (): void => res(window.YT);
    }),
});

export default loadYouTubeAPI;
