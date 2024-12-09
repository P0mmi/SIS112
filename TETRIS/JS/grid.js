export class Grid {
    constructor(canvas, filas, columnas, cellSize, space) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.filas = filas;
        this.columnas = columnas;
        this.cellSize = cellSize;
        this.space = space;
        this.matriz = []
        this.restarMatriz();
    }
    restarMatriz(){
        for (let r = 0; r < this.filas; r++) {
            this.matriz[r] = [];
            for (let c = 0; c < this.columnas; c++) {
                this.matriz[r][c] = 0;
                
            }
            
        }
    }
    dibujarCuadrado(x, y, side, color, bordeColor){
        const bordeSize = side / 10;

        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, side, side);

        this.ctx.strokeStyle = bordeColor;
        this.ctx.lineWidth = bordeSize;
        this.ctx.strokeRect(x + bordeSize / 2, y + bordeSize / 2, side- bordeSize, side - bordeSize);
    }
    ObtenerCoordenada(columna, fila){
        return {x: columna * (this.cellSize + this.space), y: fila * (this.cellSize + this.space)}
    }
    dibujar(){
        for (let r = 0; r < this.filas; r++) {
            for (let c = 0; c < columnas; c++) {
                const position = this.ObtenerCoordenada(c, r);
                this.dibujarCuadrado(position.x, position.y, this.cellSize, "#000", "#303030");
            }
            
        }
    }
}