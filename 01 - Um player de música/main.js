const audioVisionElement = document.querySelector('.Vision')
const audioFireElement = document.querySelector('.Fire')
const audioNeverStopElement = document.querySelector('.NeverStop')

document.addEventListener('click', (event) => { playAud1(event) })

let playing = false;
let lastPlaying = false;

function playAud1(event) {
  switch (event.target.id) {
    case "play-1":
      musicSelect = audioVisionElement
      play(musicSelect)
      break;
    case "play-2":
      musicSelect = audioFireElement
      play(musicSelect)
      break;
    case "play-3":
      musicSelect = audioNeverStopElement
      play(musicSelect)
      break;
  }

  function play(musicSelect) {
    if (playing && musicSelect === lastPlaying) {
      lastPlaying.pause();
      playing = false
    }
    else if (!playing) {
      musicSelect.play();
      lastPlaying = musicSelect
      playing = true
    } else {
      lastPlaying.pause();
      musicSelect.play()
      lastPlaying = musicSelect
    }
  }
}
