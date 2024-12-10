class BoardTetris {
    constructor(canvas, rows, cols, cellSize, space) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.rows = rows;
        this.cols = cols;
        this.cellSize = cellSize;
        this.space = space;
        this.grid = this.createEmptyGrid(); 
    }

    isInside(row, col) {
        return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
    }

    isEmpty(row, col) {
        return this.isInside(row, col) && this.grid[row][col] === 0; 
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

    createEmptyGrid() {
        const grid = [];
        for (let row = 0; row < this.rows; row++) {
            const rowArray = [];
            for (let col = 0; col < this.cols; col++) {
                rowArray.push(0); // Inicializa las celdas con 0
            }
            grid.push(rowArray);
        }
        return grid;
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
        return {
            x: column * (this.cellSize + this.space),
            y: row * (this.cellSize + this.space)
        };
    }
    
}
