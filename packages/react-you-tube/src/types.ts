declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: typeof YT;
  }
}

export interface Props extends YT.PlayerOptions {
  onPlayer?: (player: YT.Player) => void;
}
