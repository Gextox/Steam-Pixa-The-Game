var game = {
    canvas: undefined,
    canvasContext: undefined,
    rectanglePosition: 0
}

game.start = function(){
    game.canvas = document.getElementById("myCanvas");
    game.canvasContext = game.canvas.getContext("2d");
    game.mainLoop();
}

document.addEventListener( 'DOMContentLoaded',  game.start) //the event activates when every element of the page is already loaded, and then calls the start function

game.clearCanvas = function () { //function that restarts the canvas
    game.canvasContext.clearRect(0, 0, game.canvas.width, game.canvas.height)
}

game.mainLoop = function(){
    game.clearCanvas(); //restarts 
    game.update();
    game.draw();
    window.setTimeout(game.mainLoop, 3000)

}