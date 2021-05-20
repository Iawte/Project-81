var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


var color = "green";

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2 * Math.PI);
ctx.stroke();

function circle(x, y) {
    ctx.beginPath();
    color=document.getElementById("color").value;
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(x, y, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

canvas.addEventListener("mousedown",drawFigure);

function drawFigure(e){
    mouseX=e.clientX-canvas.offsetLeft;
    mouseY=e.clientY-canvas.offsetTop;
    circle(mouseX,mouseY)};
