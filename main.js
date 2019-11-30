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
    progressBar.style.width = `${90 * audioElement.currentTime / audioElement.duration}%`;
    /*  $("#hiddenProgressBar") = ((audioElement.duration - audioElement.currentTime)/60); */

    /* elipseProgressBar.style.left = `${300 *audioElement.currentTime/audioElement.duration}%` */
});


//Mudar a música com base no click da barra de progresso.
$("#hiddenProgressBar").click(function (e) {
    let dataDiv = $("#hiddenProgressBar").offset();
    let clickX = e.pageX - dataDiv.left;
    let tamanhoBarrafundo = $('#hiddenProgressBar').width();
    let porcentagemBarra = (clickX / tamanhoBarrafundo);
    audioElement.currentTime = porcentagemBarra * audioElement.duration;

    let tempoRestante = ((audioElement.duration - audioElement.currentTime) / 60);
    console.log(tempoRestante);



});

$("#hiddenVolumeBar").click(function (e) {

    let dataDiv = $("#hiddenVolumeBar").offset();
    let clickX = e.pageY - dataDiv.top; //distancia pro top.
    /* let volumePretendido = tamanho */
    let volumePretendido = Math.abs(clickX - 100);
    console.log(volumePretendido);

})