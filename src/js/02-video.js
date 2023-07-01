import Player from '@vimeo/player';
const PLAYER_CURRENT_TIME = 'videoplayer-current-time';

const vimeoPlayer = document.getElementById('vimeo-player');
const player = new Player(vimeoPlayer, {
  width: 640,
});

player.on('timeupdate', function (data) {
  const currentTime = data.seconds;
  localStorage.setItem(PLAYER_CURRENT_TIME, currentTime);
});

const storedTime = localStorage.getItem(PLAYER_CURRENT_TIME);
if (storedTime) {
  player.setCurrentTime(parseFloat(storedTime));
}

