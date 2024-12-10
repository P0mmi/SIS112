class Grid {
    constructor(canvas, rows, cols, cellSize, space) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.rows = rows;
        this.cols = cols;
        this.cellSize = cellSize;
        this.space = space;
        this.matriz = []
        this.restarMatriz();

        canvas.width = cols * (cellSize + space);
        canvas.height = rows * (cellSize + space);

        this.block = new Tetromino(this.canvas, this.cellSize)
        
    }
    restarMatriz(){
        for (let r = 0; r < this.rows; r++) {
            this.matriz[r] = [];
            for (let c = 0; c < this.cols; c++) {
                this.matriz[r][c] = 1;
                
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
    ObtenerCoordenada(col, row){
        return {x: col * (this.cellSize + this.space), y: row * (this.cellSize + this.space)}
    }

    dibujar(){
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < cols; c++) {
                const position = this.ObtenerCoordenada(c, r);
                if(this.matriz[r][c] !== 0){
                    this.block.drawBlock(position.x,position.y, this.matriz[r][c]);
                }
                else{
                    this.dibujarCuadrado(position.x, position.y, this.cellSize, "#000", "#303030");
                }
            }   
        }
        this.printMatriz();
    }
    printMatriz(){
        let text = "";
        this.matriz.forEach((row)=>{
            text += row.join (" ") + "/n";
        });
        console.log(text);
    }
}