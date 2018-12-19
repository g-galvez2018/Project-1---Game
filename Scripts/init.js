let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let score = 0;
let lives = 3;
let invaders = 35;
let gameover = false;
let gameStatus;

var soundEfx; // Sound Efx
var soundLoad = "over.wav"; //Game Over sound efx

var myMusic = document.getElementById("myMusic")
var myMusic2 = document.getElementById("myMusic2")
var myMusic3 = document.getElementById("myMusic3")

function playMus() {
  myMusic.play();
}

function playMus2() {
  myMusic2.play();
}
function playMus3() {
  myMusic3.play();
}
