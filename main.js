const player = document.querySelector('.player');
const audioElement = player.querySelector('#audio-source');
const btnPlayPause = player.querySelector('.controls-container-play');
const btnFoward = player.querySelector('.controls-container-foward');
const btnBackward = player.querySelector('.controls-container-backward');
const progressBar = player.querySelector('#progress-bar');
const elipseProgressBar = player.querySelector('#progress-bar-elipse');

let statusMusica = 0;

btnPlayPause.addEventListener('click', () => {
    if (statusMusica == 0) {
        audioElement.play();
        statusMusica = 1;
    } else {
        audioElement.pause();
        statusMusica = 0;
    }

});

btnFoward.addEventListener('click', () => {
    audioElement.currentTime += 10;
});

btnBackward.addEventListener('click', () => {

    audioElement.currentTime -= 10;
})

audioElement.addEventListener('timeupdate', () => {
    /*     const {
            currentTime,
            duration
        } = audioElement;
     */
    progressBar.style.width = `${90 *audioElement.currentTime/audioElement.duration}%`;
    /* elipseProgressBar.style.left = `${300 *audioElement.currentTime/audioElement.duration}%` */
});


/* document.querySelector('#meio').addEventListener('mousemove', function(event) {
    var posX = event.clientX,
        posY = event.clientY;
        console.log('posição x'+posX)
        console.log(document.getElementById('meio').offsetWidth)
  });
 */

  $("#meio").click(function (e) {
    var dataDiv = $("#meio").offset();
    var clickX = e.pageX - dataDiv.left;
    var clickY = e.pageY - dataDiv.top;

  /*   var percentXImg = clickX * 100 / $("#meio").width();
    var percentYImg = clickY * 100 / $("#meio").height(); */
    console.log(clickX);
    console.log(clickY);

});