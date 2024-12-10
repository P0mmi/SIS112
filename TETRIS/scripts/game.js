
class Game {
    constructor(canvas, rows, cols, cellSize, space) {
        this.boardTetris = new BoardTetris(canvas, rows, cols, cellSize, space);
        this.tetrominoBag = new TetrominoBag(canvas, cellSize);

        // Define las formas y la posición inicial antes de crear el Tetromino
        const shapes = [
            [ { row: 0, column: 0 }, { row: 0, column: 1 }, { row: 1, column: 0 }, { row: 1, column: 1 } ],  // Cuadrado
            [ { row: 0, column: 1 }, { row: 1, column: 0 }, { row: 1, column: 1 }, { row: 1, column: 2 } ]   // T
        ];
        const initPosition = new Position(0, Math.floor(cols / 2));

        this.currentTetromino = new Tetromino(canvas, cellSize, shapes, initPosition, 1, this.boardTetris);
        this.lastTime = 0;
        this.lastTime2 = 0;
        this.keys = {up:false,down:true};
        this.keyboard();
        
    }

    // Resto del código permanece igual
    update() {
        let currentTime = Date.now();
        let deltaTime = currentTime - this.lastTime;
        let deltaTime2 = currentTime - this.lastTime2;
    
        if (deltaTime >= 1000) {
            this.autoMoveTetrominoDown(); // Lógica para mover el tetromino hacia abajo
            this.lastTime = currentTime;
        }
    
        if (deltaTime2 >= 50) {
            this.boardTetris.draw();      // Redibuja el tablero
            this.currentTetromino.draw(); // Redibuja el tetromino actual
            this.lastTime2 = currentTime;
        }
    
        requestAnimationFrame(() => this.update()); // Sigue el ciclo de actualización
    }
    
    

    autoMoveTetrominoDown() {
        this.currentTetromino.move(1, 0);
        if(this.blockedTetromino()) {
            this.currentTetromino.move(-1, 0);
            this.placeTetromino();
        }
    }

    blockedTetromino() {
        const tetrominoPositions = this.currentTetromino.currentPositions();
        for (let i = 0; i < tetrominoPositions.length; i++) {
            if(!this.boardTetris.isEmpty(tetrominoPositions[i].row, tetrominoPositions[i].column)){
                return true;
            }
        }
        return false;
    }

    moveTetrominoLeft() {
        this.currentTetromino.move(0, -1);
        if(this.blockedTetromino()){
            this.currentTetromino.move(0, 1);
        }
    }

    moveTetrominoRight() {
        this.currentTetromino.move(0, 1);
        if(this.blockedTetromino()){
            this.currentTetromino.move(0, -1);
        }
    }

    moveTetrominoDown() {
        this.currentTetromino.move(1, 0);
        if(this.blockedTetromino()){
            this.currentTetromino.move(-1, 0);
        }
    }

    rotationTetrominoCW() {
        this.currentTetromino.rotation = (this.currentTetromino.rotation + 1) % this.currentTetromino.shapes.length;
    }
    

    rotationTetrominoCCW() {
        this.currentTetromino.rotation = (this.currentTetromino.rotation - 1 + this.currentTetromino.shapes.length) % this.currentTetromino.shapes.length;
    }
    placeTetromino() {
        const tetrominoPositions = this.currentTetromino.currentPositions(); // Esto obtiene las posiciones actuales del tetromino
        if (!tetrominoPositions) {
            console.error("No se pudieron obtener las posiciones del Tetromino");
            return;
        }
    
        for (let i = 0; i < tetrominoPositions.length; i++) {
            this.boardTetris.matriz
                [tetrominoPositions[i].row]
                [tetrominoPositions[i].column] = this.currentTetromino.id; // Coloca el Tetromino en la matriz del tablero
        }
    
        this.boardTetris.clearFullRows();  // Limpia las filas completas
    
        if (this.boardTetris.gameOver()) {  // Verifica si el juego ha terminado
            return true;
        } else {
            this.currentTetromino = this.tetrominoBag.nextTetromino();  // Obtiene el siguiente Tetromino
        }
    }
    
    
    currentPositions() {
        const shape = this.currentShape();
        return shape.map(block => ({
            row: this.position.row + block.row,
            column: this.position.column + block.column
        }));
    }
    
    keyboard() {
        window.addEventListener("keydown", (evt) => {
            if (evt.key === "ArrowLeft") {
                this.moveTetrominoLeft();
            }
            if (evt.key === "ArrowRight") {
                this.moveTetrominoRight();
            }
            if (evt.key === "ArrowUp" && !this.keys.up) {
                this.rotationTetrominoCW();
                this.keys.up = true;
            }
            if (evt.key === "ArrowDown" && !this.keys.down) {
                this.keys.down = true;
                this.moveTetrominoDown(); // Mueve el tetromino hacia abajo solo si no está siendo repetido
            }
        });
    
        window.addEventListener("keyup", (evt) => {
            if (evt.key === "ArrowUp") {
                this.keys.up = false;
            }
            if (evt.key === "ArrowDown") {
                this.keys.down = false;
            }
        });
    }
    
    
}



