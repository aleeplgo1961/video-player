const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $forward = document.querySelector("#forward");

//Añadir un evento al botón play y pause

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);

//Crear función play y pausa 

function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    //console.log("Le estoy dando play. ⏯️");

}

function handlePause() {
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
    //console.log("Le estoy dando pausa.⏯️");
}

//Añadir un evento al botón avanzar y retroceder 10 seg

$backward.addEventListener("click", handleBackward);
$forward.addEventListener("click", handleForward);

//Creamos función al botón avanzar y retroceder 10 seg

function handleBackward() {
    //$video.currentTime = $video.currentTime - 10;
    $video.currentTime -= 10;
    //console.log("Atrás 10 seg", $video.currentTime);
}

function handleForward() {
    //$video.currentTime = $video.currentTime + 10;
    $video.currentTime += 10;
    //console.log("Adelante 10 seg", $video.currentTime); //currentTime me dice en que parte está mi video
}

const $progress = document.querySelector("#progress");
$video.addEventListener("loadedmetadata", handleLoaded);
$video.addEventListener("timeupdate", handleTimeUpdate);


function handleLoaded() {
    $progress.max = $video.duration;
    //console.log("Ha cargado mi video", $video.duration);
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime;
    //console.log("Tiempo actual", $video.currentTime);
}

$progress.addEventListener("input", handleInput);

function handleInput() {
    $video.currentTime = $progress.value;
    //console.log("Aquí estoy", $progress.value);
}