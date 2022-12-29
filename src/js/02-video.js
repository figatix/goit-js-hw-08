import Vimeo from '@vimeo/player'
// Player = require("@vimeo/player")


const iframe = document.querySelector('#vimeo-player');

console.log('iframe', iframe);

const player = new Vimeo.Player(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});