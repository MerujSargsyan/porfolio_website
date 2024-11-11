const colors = {
    "orange": "#FF8811",
    "yellow": "#F4D06F",
    "white": "#FFF8F0",
    "lightBlue": "#9DD9D2",
    "darkBlue": "#FF8811",
}

const canvas = document.querySelector("#canv");
const ctx = canvas.getContext("2d");

let width;
let height;

const redraw = () => {
    ctx.fillStyle = colors.lightBlue;
    ctx.fillRect(-width/2, -height/2, width, height);

    ctx.fillStyle = colors.orange;
    ctx.fillRect(0, 0, 50, 50);
}

const resizeCanvas = () => {
    width = document.body.offsetWidth;
    height = document.body.offsetHeight;
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.translate(width/2, height/2);
    redraw();
}


window.addEventListener('resize', () => {
    resizeCanvas();
}, false);

resizeCanvas();