const canvas = document.querySelector("#canv");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

ctx.fillStyle = "#FF8811";
ctx.fillRect(width/2, height/2, 50, 50);
