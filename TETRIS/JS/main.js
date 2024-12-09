import {BoardTetris} from 'JS/bordeTetris.js'

const canvasTetris = document.getElementById('canvas-tetris');
const filas = 20;
const columnas = 10;
const cellSize = 26;
const space = 2

const BordeTetris = new BoardTetris(canvasTetris, 20, 10, 26, 2);

function update() {

    BoardTetris.draw();
    requestAnimationFrame(update);
}

update();