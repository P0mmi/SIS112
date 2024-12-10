class Position {
    constructor(row, column) {
        this.row = row;
        this.column = column;
    }
}

class Tetromino {
    constructor(canvas, cellSize, shapes, position, id, boardTetris) {
        this.canvas = canvas;
        this.cellSize = cellSize;
        this.shapes = shapes;
        this.position = position;
        this.id = id;
        this.boardTetris = boardTetris;
        this.rotation = 0; // Inicializa la rotación
    }

    drawSquare(x, y, size, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, size, size);
    }

    drawTriangle(x1, y1, x2, y2, x3, y3, color) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(x1, y1);
        this.ctx.lineTo(x2, y2);
        this.ctx.lineTo(x3, y3);
        this.ctx.fill();
        this.ctx.closePath();
    }

    getColorPalette(id) {
        const palette = {
            1: { 
                rigthTriangle: "#B5193B", 
                leftTriangle: "#FFFFFF", 
                square: "#EE1B2E" 
            },
            2: { 
                rigthTriangle: "#FE5E02", 
                leftTriangle: "#FFFFFF", 
                square: "#FE8602" },
            3: { 
                rigthTriangle: "#FE8601", 
                leftTriangle: "#FFFFFF", 
                square: "#FFDB01" },
            4: { 
                rigthTriangle: "#22974C", 
                leftTriangle: "#FFFFFF", 
                square: "#24DC4F" },
            5: { 
                rigthTriangle: "#49BDFF", 
                leftTriangle: "#FFFFFF", 
                square: "#2D97F7" },
            6: { 
                rigthTriangle: "#0000C9", 
                leftTriangle: "#FFFFFF", 
                square: "#0101F0" },
            7: { 
                rigthTriangle: "#8900D3", 
                leftTriangle: "#FFFFFF", 
                square: "#A000F1" }
        };
        return palette[id] || palette[1];
    }

    drawBlock(x, y, id) {
        const margin = this.cellSize / 8;
        const palette = this.getColorPalette(id);
    
        // Dibuja el triángulo izquierdo
        this.ctx.fillStyle = palette.leftTriangle;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x + this.cellSize, y);
        this.ctx.lineTo(x, y + this.cellSize);
        this.ctx.fill();
    
        // Dibuja el triángulo derecho
        this.ctx.fillStyle = palette.rigthTriangle;
        this.ctx.beginPath();
        this.ctx.moveTo(x + this.cellSize, y);
        this.ctx.lineTo(x + this.cellSize, y + this.cellSize);
        this.ctx.lineTo(x, y + this.cellSize);
        this.ctx.fill();
    
        // Dibuja el cuadrado central
        this.ctx.fillStyle = palette.square;
        this.ctx.fillRect(x + margin, y + margin, this.cellSize - margin * 2, this.cellSize - margin * 2);
    }
    

    currentShape() {
        if (this.shapes.length === 0) {
            return [];  // Devuelve un array vacío para evitar errores
        }
        return this.shapes[this.rotation] || [];
    }
    

    draw() {
        const shape = this.currentShape();
        for (let i = 0; i < shape.length; i++) {
            const position = this.boardTetris.ObtenerCoordenada(this.position.column + shape[i].column, this.position.row + shape[i].row);
            this.drawBlock(position.x, position.y, this.id);  // Dibuja el bloque en la cuadrícula
        }
    }

    currentPositions() {
        const shape = this.shapes[this.rotation];  // Obtiene la forma actual del Tetromino según la rotación
        return shape.map(block => ({
            row: this.position.row + block.row,  // Calcula las posiciones absolutas
            column: this.position.column + block.column
        }));
    }
    move(rowOffset, colOffset) {
        this.position.row += rowOffset;
        this.position.column += colOffset;
    }
    

    reset() {
        this.rotation = 0;
        this.position = new Position(this.initPosition.row, this.initPosition.column);
    }
}


const TetrominoTypes = {
    T : {
        id: 1,
        initPosition: new Position(0, 3),
        shapes: [
            [new Position(0, 1), new Position(1, 0), new Position(1, 1), new Position(1, 2)],
            [new Position(0, 1), new Position(1, 1), new Position(1, 2), new Position(2, 1)],
            [new Position(1, 0), new Position(1, 1), new Position(1, 2), new Position(2, 1)],
            [new Position(0, 1), new Position(1, 0), new Position(1, 1), new Position(2, 1)]
        ]
    },
    O : {
        id: 2,
        initPosition: new Position(0, 4),
        shapes: [
            [new Position(0, 0), new Position(0, 1), new Position(1, 0), new Position(1, 1)]
        ]
    },
    I : {
        id: 3,
        initPosition: new Position(-1, 3),
        shapes: [
            [new Position(1, 0), new Position(1, 1), new Position(1, 2), new Position(1, 3)],
            [new Position(0, 2), new Position(1, 2), new Position(2, 2), new Position(3, 2)],
            [new Position(2, 0), new Position(2, 1), new Position(2, 2), new Position(2, 3)],
            [new Position(0, 1), new Position(1, 1), new Position(2, 1), new Position(3, 1)]
        ]
    },
    S : {
        id: 4,
        initPosition: new Position(0, 3),
        shapes: [
            [new Position(0, 1), new Position(0, 2), new Position(1, 0), new Position(1, 1)],
            [new Position(0, 1), new Position(1, 1), new Position(1, 2), new Position(2, 2)],
            [new Position(1, 1), new Position(1, 2), new Position(2, 0), new Position(2, 1)],
            [new Position(1, 0), new Position(1, 0), new Position(1, 1), new Position(2, 1)]
        ]
    },
    Z : {
        id: 5,
        initPosition: new Position(0, 3),
        shapes: [
            [new Position(0, 0), new Position(0, 1), new Position(1, 1), new Position(1, 2)],
            [new Position(0, 2), new Position(1, 1), new Position(1, 2), new Position(2, 1)],
            [new Position(1, 0), new Position(1, 1), new Position(2, 1), new Position(2, 2)],
            [new Position(0, 1), new Position(1, 0), new Position(1, 1), new Position(2, 0)]
        ]
    },
    J : {
        id: 6,
        initPosition: new Position(0, 3),
        shapes: [
            [new Position(0, 0), new Position(1, 0), new Position(1, 1), new Position(1, 2)],
            [new Position(0, 1), new Position(0, 2), new Position(1, 1), new Position(2, 1)],
            [new Position(1, 0), new Position(1, 1), new Position(1, 2), new Position(2, 2)],
            [new Position(0, 1), new Position(1, 1), new Position(2, 0), new Position(2, 1)]
        ]
    },
    L : {
        id: 7,
        initPosition: new Position(0, 3),
        shapes: [
            [new Position(0, 2), new Position(1, 0), new Position(1, 1), new Position(1, 2)],
            [new Position(0, 1), new Position(1, 1), new Position(2, 1), new Position(2, 2)],
            [new Position(1, 0), new Position(1, 1), new Position(1, 2), new Position(2, 0)],
            [new Position(0, 0), new Position(0, 1), new Position(1, 1), new Position(2, 1)]
        ]
    }
};

class TetrominoBag {
    constructor(canvas, cellSize) {
        this.canvas = canvas;
        this.cellSize = cellSize;
        this.bag = [];
    }

    fillBag() {
        const tetrominoTypes = [
            TetrominoTypes.T,
            TetrominoTypes.O,
            TetrominoTypes.I,
            TetrominoTypes.S,
            TetrominoTypes.Z,
            TetrominoTypes.J,
            TetrominoTypes.L,
        ];
        
        this.bag.length = 0;
        tetrominoTypes.forEach((type) => {
            this.bag.push(new Tetromino(this.canvas, this.cellSize, type.shapes, type.initPosition, type.id,));
        });

        for (let i = this.bag.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.bag[i], this.bag[j]] = [this.bag[j], this.bag[i]];
        }
    }

    nextTetromino() {
        if (this.bag.length === 0) {
            this.fillBag();
        }
        return this.bag.pop();
    }

}
