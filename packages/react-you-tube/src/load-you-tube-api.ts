import createScriptLoader from '@njmyers/script-loader';

const youTubeIframeAPIPromise = new Promise<Window['YT'] | null>(resolve => {
  if (typeof window !== 'undefined') {
    window.onYouTubeIframeAPIReady = (): void => {
      resolve(window.YT);
    };
  } else {
    resolve(null);
  }
});

const loadYouTubeAPI = createScriptLoader({
  id: 'youtube',
  src: '//www.youtube.com/iframe_api',
  initialize: (): Promise<Window['YT'] | null> => youTubeIframeAPIPromise,
});

export default loadYouTubeAPI;
