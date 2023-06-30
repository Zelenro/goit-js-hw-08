import Player from '@vimeo/player';

const vimeoPlayer = document.getElementById('vimeo-player');
const player = new Player(vimeoPlayer, {
  width: 640,
});

player.on('timeupdate', function (data) {
  const currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
});

const storedTime = localStorage.getItem('videoplayer-current-time');
if (storedTime) {
  player.setCurrentTime(parseFloat(storedTime));
}

window.addEventListener('load', function () {
  const storedTime = localStorage.getItem('videoplayer-current-time');
  if (storedTime) {
    player.setCurrentTime(parseFloat(storedTime)).then(function () {
      player.play();
    });
  }
});