class BoardTetris {
    constructor(canvas, rows, cols, cellSize, space) {
        this.canvas = canvas;
        this.rows = rows;
        this.cols = cols;
        this.cellSize = cellSize;
        this.space = space;
        this.matriz = this.createEmptyBoard();
    }

    isInside(row, col) {
        return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
    }

    isEmpty(row, col) {
        if (!this.isInside(row, col)) {
            return false;
        }
        return this.grid[row][col] === 0;
    }
    

    isRowFull(row) {
        return this.grid[row].every(element => element !== 0);
    }

    isRowEmpty(row) {
        return this.grid[row].every(element => element === 0);
    }

    clearRow(row) {
        this.grid[row].fill(0); 
    }

    moveRowDown(row, numRows) {
        this.grid[row + numRows] = this.grid[row].slice();
        this.clearRow(row);
    }

    clearFullRows() {
        let cont = 0;
        for (let row = this.rows - 1; row >= 0; row--) { // Cambié 'this.row' por 'this.rows'
            if (this.isRowFull(row)) {
                this.clearRow(row);
                cont++;
            } else if (cont > 0) {
                this.moveRowDown(row, cont);
            }
        }
        return cont;
    }

    gameOver() {
        return !(this.isRowEmpty(0)); // Cambié 'this.row' por 'this.rows'
    }

    createEmptyBoard() {
        return Array.from({ length: this.rows }, () => Array(this.cols).fill(0));
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Limpiar el canvas

        // Dibujar las celdas de la cuadrícula
        this.ctx.strokeStyle = "#ccc"; // Color de las líneas de la cuadrícula
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const x = col * (this.cellSize + this.space);  // Calcula la posición en el eje X
                const y = row * (this.cellSize + this.space);  // Calcula la posición en el eje Y
                this.ctx.strokeRect(x, y, this.cellSize, this.cellSize);  // Dibuja la celda
            }
        }
    }

    ObtenerCoordenada(column, row) {
        if (row < 0 || row >= this.rows || column < 0 || column >= this.cols) {
            return null;  // Evita acceder a posiciones fuera del tablero
        }
        const x = column * this.cellSize;
        const y = row * this.cellSize;
        return { x, y };  // Devuelve las coordenadas X e Y basadas en la posición de la celda
    }
}
