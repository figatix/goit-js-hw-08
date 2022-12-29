import Vimeo from '@vimeo/player'
// Player = require("@vimeo/player")


const iframe = document.querySelector('#vimeo-player');

console.log('iframe', iframe);

const player = new Vimeo(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.on('timeupdate', onTimeupdate)



player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

function onTimeupdate(e) {
  console.log(e);
  const stringifyTimeupdate = JSON.stringify(e)

  localStorage.setItem('videoplayer-current-time', stringifyTimeupdate)
}

// const a = { seconds: 14.125, percent: 0.025, duration: 571.563 };
// const bParse = JSON.stringify(a);
// console.log(bParse);

const currentTimeLastView = localStorage.getItem('videoplayer-current-time');

try {
  const parseCurrentTimeLastView = JSON.parse(currentTimeLastView);
  const currentSecondLastView = parseCurrentTimeLastView.seconds

  player.setCurrentTime(currentSecondLastView).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
      case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

      default:
          // some other error occurred
          break;
    }
});
} catch (err) {
  console.log(err);
}