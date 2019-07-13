export interface YouTubeWindow extends Window {
  onYouTubeIframeAPIReady?: () => void;
  YT?: {
    Player: YT.Player;
  };
}

export interface Props extends YT.PlayerOptions {
  onPlayer?: (player: YT.Player) => void;
}
