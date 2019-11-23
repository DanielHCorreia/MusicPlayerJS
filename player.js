const titulo = document.getElementsByClassName("player-titulo");
const playerElement = document.querySelector("#my-player");
const controls = playerElement.querySelector(".player-botoes");

const playBtn = controls.querySelector('.player-botoes-play');
const pauseBtn = controls.querySelector('.player-botoes-pause');
const fowardBtn = controls.querySelector('.player-botoes-forward');
const backwardBtn = controls.querySelector('.player-botoes-backward');
const progressBar = playerElement.querySelector('.player-progress-bar');

const audioElement = playerElement.querySelector('audio');

playBtn.addEventListener('click', () => {
    audioElement.play();
});

pauseBtn.addEventListener('click', () => {
    audioElement.pause();
});

fowardBtn.addEventListener('click', () => {
    audioElement.currentTime += 10;
});

backwardBtn.addEventListener('click', () => {
    audioElement.currentTime -= 10;
});

audioElement.addEventListener('timeupdate', () => {
    /*     const {
            currentTime,
            duration
        } = audioElement;
     */
    progressBar.style.width = `${100 *audioElement.currentTime/audioElement.duration}%`;
});