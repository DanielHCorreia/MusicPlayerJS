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

/* progressBar.addEventListener('click', () => {
    audioElement.currentTime = audioElement.duration
});
 */
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


 //Mudar a música com base no click da barra de progresso.
  $("#backgroundBar").click(function (e) {
    let dataDiv = $("#backgroundBar").offset();
    let clickX = e.pageX - dataDiv.left;
    let tamanhoBarrafundo = $('#backgroundBar').width();
    let porcentagemBarra = (clickX/tamanhoBarrafundo);
    audioElement.currentTime = porcentagemBarra*audioElement.duration;



});