'use strict'

import {Player, parseInput} from "./game.js";

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
    ctx.fillRect(Player.x, Player.y, Player.collision.w, Player.collision.h);
}

const resizeCanvas = () => {
    width = document.body.offsetWidth;
    height = document.body.offsetHeight;
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    ctx.translate(width/2, height/2);
}

const update = () => {
    parseInput();
    redraw();
}

window.addEventListener('resize', () => {
    resizeCanvas();
}, false);

(function main() {
    resizeCanvas();
    setInterval(update, 1000 / 60);
})();
