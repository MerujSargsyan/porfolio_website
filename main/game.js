'use strict'

const playerSpeed = 5;

export const keyState = {
    "w": false,
    "s": false,
    "d": false,
    "a": false,
};

export const Player = {
    "x": 0,
    "y": 0,
    "collision": {"w": 50, "h": 50},
}

export const parseInput = () => {
    if(keyState.w)
        Player.y -= playerSpeed;
    if(keyState.s)
        Player.y += playerSpeed;
    if(keyState.a)
        Player.x -= playerSpeed;
    if(keyState.d)
        Player.x += playerSpeed;
};

document.addEventListener('keydown', (event) => {
    keyState[event.key] = true;
});

document.addEventListener('keyup', (event) => {
    keyState[event.key] = false;
});