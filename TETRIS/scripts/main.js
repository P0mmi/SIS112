const canvasTetris = document.getElementById('canvas-tetris');
const rows = 20;
const cols = 10;
const cellSize = 26;
const space = 2;

canvasTetris.width = cols * (cellSize + space);  
canvasTetris.height = rows * (cellSize + space);

const shapes = [
    [ { row: 0, column: 0 }, { row: 0, column: 1 }, { row: 1, column: 0 }, { row: 1, column: 1 } ],  
    [ { row: 0, column: 1 }, { row: 1, column: 0 }, { row: 1, column: 1 }, { row: 1, column: 2 } ]   
];
const initPosition = new Position(0, Math.floor(cols / 2));

const boardTetris = new BoardTetris(canvasTetris, rows, cols, cellSize, space);
const tetrominoBag = new TetrominoBag(canvasTetris, cellSize);
const game = new Game(canvasTetris, rows, cols, cellSize, space);
const tetromino = new Tetromino(canvasTetris, cellSize, shapes, initPosition, 1, boardTetris);

function update() {
    game.update();
    boardTetris.draw();
    tetromino.draw();
    requestAnimationFrame(update);
}

update();
