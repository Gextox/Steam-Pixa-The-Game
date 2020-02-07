let screen = document.querySelector("#gameArea")
let mainBar = document.querySelector("#main_bar");
let canvas = document.querySelector("#myCanvas");

screen.style.height = window.innerHeight;
screen.style.width = wondow.innerWidth;

mainBar.style.width = canvas.width + "px";
mainBar.style.height = (canvas.height / 3) + "px";
mainBar.style.border = "2px solid black"

