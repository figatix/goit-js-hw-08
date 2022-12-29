import Vimeo from '@vimeo/player'
const throttle = require('lodash.throttle');


const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);


const onTimeupdateThrottle = throttle(onTimeupdate, 1000)

function onTimeupdate(e) {
  const stringifyTimeupdate = JSON.stringify(e)
  localStorage.setItem('videoplayer-current-time', stringifyTimeupdate)
}

player.on('timeupdate', onTimeupdateThrottle)

const currentTimeLastView = localStorage.getItem('videoplayer-current-time');

try {
  const parseCurrentTimeLastView = JSON.parse(currentTimeLastView);
  const currentSecondLastView = parseCurrentTimeLastView.seconds

  player.setCurrentTime(currentSecondLastView).then(function(seconds) {}).catch(function(error) {
    switch (error.name) {
      case 'RangeError':
          break;
      default:
          break;
    }
  });
} catch (err) {
  console.log(err);
}