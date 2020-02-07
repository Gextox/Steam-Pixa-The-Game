let screen = document.querySelector("#gameArea")
let mainBar = document.querySelector("#main_bar");
let canvas = document.querySelector("#myCanvas");

screen.style.height = window.innerHeight + "px";
screen.style.width = window.innerWidth + "px";

mainBar.style.width = canvas.width + "px";
mainBar.style.height = (canvas.height / 3) + "px";
mainBar.style.border = "2px solid black"

