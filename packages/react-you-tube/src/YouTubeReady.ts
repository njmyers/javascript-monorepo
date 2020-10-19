/**
 * A class to handle the `onYouTubeIframeAPIReady` callback and provide a
 * promise friendly API for subscribing to ready callback events
 */
class YouTubeReady {
  promises: Set<Promise<Window['YT']>>;
  resolves: Set<(YT: Window['YT']) => void>;

  constructor() {
    this.promises = new Set();
    this.resolves = new Set();

    window.onYouTubeIframeAPIReady = (): void => {
      this.publish(window.YT);
    };
  }

  /**
   * Subscribe to the `onYouTubeIframeAPIReady` callback
   *
   * @returns A promise that will resolve with the Window.YT instance
   */
  subscribe(): Promise<Window['YT']> {
    const promise = new Promise<Window['YT']>(resolve => {
      this.resolves.add(resolve);
    });

    this.promises.add(promise);
    return promise;
  }

  /**
   * Publish all subscription to the `onYouTubeIframeAPIReady` callback
   */
  publish(value: Window['YT']): void {
    this.resolves.forEach(resolve => {
      resolve(value);
    });
  }
}

export default YouTubeReady;
