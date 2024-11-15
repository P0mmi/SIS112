class Matriz {
    constructor(canvasId, filas, columnas, anchoCelda, altoCelda) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.filas = filas;
        this.columnas = columnas;
        this.anchoCelda = anchoCelda;
        this.altoCelda = altoCelda;

        // Crear una matriz bidimensional vacía
        this.matriz = [];
        this.vaciarMatriz();

    }

    // Método para vaciar la matriz inicializándola con ceros
    vaciarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            this.matriz[i] = []; // Crear una fila vacía
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 0; // Inicializar cada celda con 0
            }
        }
    }

    // Ejemplo 1: Patrón Aleatorio
   llenarMatrizAleatorio() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                var numeroRandom = Math.random();
                this.matriz[i][j] = Math.floor(numeroRandom * 8); // Valores entre 0, 1, 2
            }
        }
        this.dibujarMatriz();
    }

    //Primera fila con 2, el resto 0
    llenarMatrizPrimeraFila(){
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j <this.columnas; j++ ){

                if(i == 0 ) {
                    this.matriz[i][j] = 2;
                }else{
                    this.matriz[i][j] = 0;
                }
                
            }

        }
        this.dibujarMatriz();
    }

    llenarMatrizPrimeraColumna(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j <this.columnas; j++ ){

                if(j == 0 ) {
                    this.matriz[i][j] = 2;
                }else{
                    this.matriz[i][j] = 0;
                }
                
            }

        }
        this.dibujarMatriz();
    }
    // Ejemplo 2: Patrón en Diagonal
    llenarMatrizDiagonal() {
        this.vaciarMatriz();
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si la posición de la fila (i) es igual a la posición de la columna (j),
                // estamos en la diagonal de la matriz. Asignamos 1 en esa posición.
                if (i === j) {
                    this.matriz[i][j] = 1;
                } else {
                    // Si no estamos en la diagonal, asignamos 0.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón en diagonal, la dibujamos
        this.dibujarMatriz();
    }

    llenarMatrizDiagonalInversa() {
        this.vaciarMatriz();
         for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i + j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }


    llenarMatrizBordes() {
        this.vaciarMatriz();
        // Recorremos cada fila de la matriz
        for (let i = 0; i < this.filas; i++) {
            // Recorremos cada columna de la matriz
            for (let j = 0; j < this.columnas; j++) {
                // Si estamos en la primera o última fila (i === 0 o i === this.filas - 1)
                // o en la primera o última columna (j === 0 o j === this.columnas - 1),
                // estamos en el borde de la matriz y asignamos 2 en esa posición.
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                } else {
                    // Si no estamos en el borde, asignamos 0 en el interior.
                    this.matriz[i][j] = 0;
                }
            }
        }
        // Después de llenar la matriz con el patrón de bordes, la dibujamos
        this.dibujarMatriz();
    }

    llenarMatrizBordes2() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if ((i === 1 || i === this.filas - 2) && (j >= 1 && j <= this.columnas - 2) || (j === 1 || j === this.columnas - 2) && (i >= 1 && i <= this.filas - 2)) {
                    this.matriz[i][j] = 2;
                } else {
                     this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }


    llenarMatrizPiramide(){
        this.vaciarMatriz();
    const centro = Math.floor(this.columnas / 2);
    const alturaPiramide = Math.floor(this.filas / 2);
        for (let i = 0; i < alturaPiramide; i++) {
    const inicio = centro - i;
    const fin = centro + i;
        for (let j = 0; j < this.columnas; j++) {
        if (j >= inicio && j <= fin) {
         this.matriz[i][j] = 2; // Dibujar la pirámide en la parte superior
        } else {
        this.matriz[i][j] = 0; // Resto en 0
        }
        }
    }
    this.dibujarMatriz();
    }

    llenarMatriz4bordes(){
        this.vaciarMatriz();
        const mitadCol = Math.floor(this.columnas / 2);
        const mitadFilas = Math.floor(this.filas / 2);
            for (let i = 0; i < this.filas; i++) {
                for (let j = 0; j < this.columnas; j++) {
                    if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                        this.matriz[i][j] = 1;
                    } else {
                        this.matriz[i][j] = 0;
                    }

                    if(j == mitadCol || j == mitadCol - 1 ) {
                        this.matriz[i][j] = 1;
                    }
                    if(i == mitadFilas || i == mitadFilas - 1 ) {
                        this.matriz[i][j] = 1;
                    }
                }
            }
            this.dibujarMatriz();
    }

    llenarMatrizSecuencia1(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = i % 3;

            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizSecuencia2(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = j % 3;

            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizSecuencia0_al_7(){
        this.vaciarMatriz();
       var puntero = 0;
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = puntero;
                if (puntero == 7) {
                    puntero = -1;
                }
                puntero = puntero + 1

            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizSecuencia0_al_7_Col(){
        this.vaciarMatriz();
       var puntero = 0;
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[j][i] = puntero;
                if (puntero == 7) {
                    puntero = -1;
                }
                puntero = puntero + 1
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizSecuenciaInversa(){
        this.vaciarMatriz();
       var puntero = 7;
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = puntero;
                if (puntero == 0) {
                    puntero = 8;
                }
                puntero = puntero - 1;
            }
        }
        this.dibujarMatriz();
    }

    llenarMatrizSecuenciaRepetitiva(){
        this.vaciarMatriz();
        var intercambio = "disminuir";
        var puntero = 7;
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = puntero;
                ///////////////////////////////////// 7 a 0
                if (intercambio == "disminuir") {
                    if (puntero == 0) {
                        intercambio = "incrementar"
                    }
                 
                 puntero = puntero - 1;
                }  

                //////////////////////////////////// 0 a 7
                if (intercambio == "incrementar") {
                    if (puntero == 7) {
                        puntero = puntero -1;
                        intercambio = "disminuir"
                    }
                    puntero = puntero + 1;
                }

            }
        }
        this.dibujarMatriz();
    }
    
    // Método para dibujar la matriz en el canvas
    dibujarMatriz() {
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                const x = j * this.anchoCelda;
                const y = i * this.altoCelda;
                this.dibujarCelda(x, y, this.matriz[i][j]);
            }
        }
    }


    //EJERCICIOS DEL PRACTICO----------------------------------------------------------------------------------------------------------------------------------------------------
    
    
//Ejercicio 1: Cuadrado Relleno
    CuadradoRelleno() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 1;
            }
        }
        this.dibujarMatriz();
    }

//Ejericio 2: Marco interno
    MarcoInterno(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 0;
                } else {
                    this.matriz[i][j] = 1;
                }
            }
        }
        this.dibujarMatriz();
    }

//Ejercicio 3: Cruces
    Cruces(){
        this.vaciarMatriz();
        const mitadCol = Math.floor(this.columnas / 2);
        const mitadFilas = Math.floor(this.filas / 2);

        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (j === mitadCol) {
                    this.matriz[i][j] = 1;
                }
                if (i === mitadFilas) {
                    this.matriz[i][j] = 1;
                }
            }
        }
        this.dibujarMatriz();
    }

//Ejercicio 4: Bordes y Diagonales 
    BordesYDiagonales(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i == j || i + j == this.filas - 1){
                    if ((i && j != this.filas - 2) && (i && j != 1)){
                        this.matriz[i][j] = 2;
                    }
                }
                if ((i == 0 || i == this.filas - 1) || (j == 0 || j == this.columnas - 1)){
                    this.matriz[i][j] = 1;
                }
            }
            this.dibujarMatriz();
            }
    }

//Ejercicio 5: Bandera
    Bandera(){ 
        this.vaciarMatriz();
        const franjaAltura = Math.floor(this.filas / 3);
        for (let i = 0; i < franjaAltura; i++) { // Primera franja con 5
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 5;
            }
        }
        for (let i = franjaAltura; i < 2 * franjaAltura; i++) { // Segunda franja con 6
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 6;
            }
        }
        for (let i = 2 * franjaAltura; i < this.filas; i++) { // Tercera franja con 7
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = 7;
            }
        }
        this.dibujarMatriz();
    }          

//Ejercicio 6: Relleno Alterno entre 0 y 1
    RellenoAlterno() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = i % 2;
            }
        }
        this.dibujarMatriz();
    }   

//Ejercicio 7: Diagonal
    Diagonal() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i === j) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }                     
//Ejericio 8: Relleno en espiral
    RellenoEspiral() {
        this.vaciarMatriz();
        let row = 0;
        let col = 0;
        let direction = 0; 
        let steps = 1;
        let stepCount = 0;
    
        for (let i = 0; i < this.columnas * this.filas; i++) {
            this.matriz[row][col] = 1;
    
            stepCount++;
    
            if (stepCount === steps) {
                stepCount = 0;
                direction = (direction + 1) % 4;
                if (direction % 2 === 0) {
                    steps++;
                }
            }
    
            switch (direction) {
                case 0: 
                    if (col + 1 >= this.columnas) {
                        break; 
                    }
                    col++;
                    break;
                case 1:
                    if (row + 1 >= this.filas) {
                        break;
                    }
                    row++;
                    break;
                case 2: 
                    if (col - 1 < 0) {
                        break; 
                    }
                    col--;
                    break;
                case 3:
                    if (row - 1 < 0) {
                        break; 
                    }
                    row--;
                    break;
        }
    }this.dibujarMatriz();        
    }

//Ejericio 9: Triangulo Superior Derecho
    TrianguloSupIzq() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j <= i; j++) {  // Solo rellena hasta el índice 'i'
                this.matriz[i][j] = 1;
            }
        }
        this.dibujarMatriz();
    }

//Ejericio 10: Triangulo Inferior Izquierdo
    TrianguloInfDer() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = this.columnas - 1; j >= this.columnas - 1 - i; j--) {  // Rellena desde la derecha hasta donde se quiere
                this.matriz[i][j] = 1;
            }
        }this.dibujarMatriz();
    }

//Ejericio 11: Cuadricula
    Cuadricula() {
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Alterna las filas y columnas con 1s
                if (i % 2 === 0 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    
    }

//Ejercicio 12: Triangulo central
    TrianguloCentral() {
        this.vaciarMatriz();
    const centro = Math.floor(this.columnas / 2);
    const alturaPiramide = Math.floor(this.filas / 2);
        for (let i = 0; i < alturaPiramide; i++) {
    const inicio = centro - i;
    const fin = centro + i;
        for (let j = 0; j < this.columnas; j++) {
        if (j >= inicio && j <= fin) {
         this.matriz[i][j] = 1; // Dibujar la pirámide en la parte superior
        } else {
        this.matriz[i][j] = 0; // Resto en 0
        }
        }
    }
    this.dibujarMatriz();
    }

//Ejercicio 13: Rombos Concentricos
    RombosConcentricos(){
        this.vaciarMatriz();
        const centro = Math.floor(this.columnas / 2);
        const alturaPiramide = Math.floor(this.filas / 2);
    
        for (let i = 0; i < alturaPiramide; i++) {
            const inicio = centro - i;
            const fin = centro + i;
    
            for (let j = inicio; j <= fin; j++) {
                this.matriz[i][j] = 1; 
            }
        }
    
        for (let i = 0; i < alturaPiramide; i++) {
            const inicio = centro - i;
            const fin = centro + i;
    
            for (let j = inicio; j <= fin; j++) {
                this.matriz[this.filas - 1 - i][j] = 1; 
            }
        }
    
        this.dibujarMatriz();
    
        
    }

//Ejercicio 14: Cruces Concentricas
    CrucesConcentricas(){
        this.vaciarMatriz();
        
    }

//Ejercicio 15: Bandera Diagonal
    BanderaDeNepal(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j <= i; j++) {  // Solo rellena hasta el índice 'i'
                this.matriz[i][j] = 1;
            }
        }
        this.dibujarMatriz();
    }

//Ejercicio 16: Cuadrado dentro de un cuadrado
    CuadradoDentroCuadrado(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Bordes externos
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                }
                // Cuadrado interno de "2"
                else if ((i >= 2 && i <= this.filas - 3) && (j >= 2 && j <= this.columnas - 3)) {
                    // Bordes del cuadrado interno
                    if (i === 2 || i === this.filas - 3 || j === 2 || j === this.columnas - 3) {
                        this.matriz[i][j] = 2;
                    } else {
                        // Centro vacío del cuadrado interno
                        this.matriz[i][j] = 0;
                    }
                }
                // Resto del área intermedia
                else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }

//Ejercicio 17: Bordes y Centros 
    BordesYCentros(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i === 0 || i === this.filas - 1 || j === 0 || j === this.columnas - 1) {
                    this.matriz[i][j] = 1;
                } else if (i >= 3 && i <= 6 && j >= 3 && j <= 6) {
                    this.matriz[i][j] = 2;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }
        this.dibujarMatriz();
    }

//Ejercicio 18: Lineas Paralelas
    LineasParalelas(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (i % 2 === 0) {
                    this.matriz[i][j] = 1;
                } else {
                    if (j === 0 || j === this.columnas - 1) {
                        this.matriz[i][j] = 1;
                    }
                }
            }
        }this.dibujarMatriz();
    }

//Ejercicio 19: Marcas de Cruz
    MarcasDeCruz(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                this.matriz[i][j] = (i % 4 === j % 4) ? 1 : 0;
            }
        }this.dibujarMatriz();
    }

//Ejercicio 20: Rombo de Esquinas
    RomboDeEsquinas(){
        this.vaciarMatriz();
        const centro = Math.floor(this.columnas / 2);
        const alturaPiramide = Math.floor(this.filas / 2);
        for (let i = 0; i < alturaPiramide; i++) {
            const inicio = centro - i;
            const fin = centro + i;
            for (let j = inicio; j <= fin; j++) {
                this.matriz[i][j] = 1; 
            }
        }
            for (let i = 0; i < alturaPiramide; i++) {
            const inicio = centro - i;
            const fin = centro + i;
            for (let j = inicio; j <= fin; j++) {
                this.matriz[this.filas - 1 - i][j] = 0; 
            }
        }
    
        this.dibujarMatriz();
    }

//Ejercicio 21: Relleno en Forma de Ajedrez
    RellenoDeAjedrez(){ 
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                // Alternar entre 1 y 0 para crear el patrón de ajedrez
                if ((i + j) % 2 === 0) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }this.dibujarMatriz();
    }

//Ejercicio 22: Reloj de Arena
    RelojDeArena(){
        this.vaciarMatriz();
        for (let i = 0; i < this.filas; i++) {
            for (let j = 0; j < this.columnas; j++) {
                if (j >= i && j < this.columnas - i || j >= this.columnas - i - 1 && j <= i) {
                    this.matriz[i][j] = 1;
                } else {
                    this.matriz[i][j] = 0;
                }
            }
        }this.dibujarMatriz();
    }
// Fin de la tarea
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    // Método para dibujar una celda específica según su valor
    dibujarCelda(x, y, valor) {
        switch (valor) {
            case 0:
                this.DibujarCero(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 1:
                this.DibujarUno(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 2:
                this.DibujarDos(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 3:
                this.DibujarTres(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 4:
                this.DibujarCuatro(x, y, this.anchoCelda, this.altoCelda);
                break;

            case 5:
                this.DibujarCinco(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 6:
                this.DibujarSeis(x, y, this.anchoCelda, this.altoCelda);
                break;
            case 7:
                this.DibujarSiete(x, y, this.anchoCelda, this.altoCelda);
                break;
            default:
                console.warn(`Valor desconocido en la matriz: ${valor}`);
                break;
        }
    }

    // Métodos para dibujar cada tipo de celda con un color específico
    DibujarCero(x, y, ancho, alto) {
        this.ctx.fillStyle = "#2c3e50"; // Color para valor 0
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        // Agregar el texto "0" centrado en el rectángulo
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";  
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("0", x + ancho / 2, y + alto / 2);
    }

    DibujarUno(x, y, ancho, alto) {
        this.ctx.fillStyle = "#3cc417"; // Color para valor 1
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";  
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("1", x + ancho / 2, y + alto / 2);
    }

    DibujarDos(x, y, ancho, alto) {
        this.ctx.fillStyle = "#950dc4"; // Color para valor 2
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";  
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("2", x + ancho / 2, y + alto / 2);
    }
    
    DibujarTres(x, y, ancho, alto) {
        this.ctx.fillStyle = "#50aa69"; // Color para valor 3
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";  
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("3", x + ancho / 2, y + alto / 2);
    }
    
    DibujarCuatro(x, y, ancho, alto) {
        this.ctx.fillStyle = "#6ca6b2"; // Color para valor 4
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#ecf0f1";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";  
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("4", x + ancho / 2, y + alto / 2);
    }

    DibujarCinco(x, y, ancho, alto) {
        this.ctx.fillStyle = "#df0707"; // Color para valor 5
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#6ca6b2";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";  
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("5", x + ancho / 2, y + alto / 2);
    }

    DibujarSeis(x, y, ancho, alto) {
        this.ctx.fillStyle = "#e1f114"; // Color para valor 6
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#6ca6b2";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";  
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("6", x + ancho / 2, y + alto / 2);
    }

    DibujarSiete(x, y, ancho, alto) {
        this.ctx.fillStyle = "#319b0c"; // Color para valor 7
        this.ctx.fillRect(x, y, ancho, alto);
        this.ctx.strokeStyle = "#6ca6b2";
        this.ctx.strokeRect(x, y, ancho, alto);
        this.ctx.font = "bold 20px Arial"; // Ajustar la fuente y tamaño
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";  
        this.ctx.fillStyle = "#fff"; // Color del texto (blanco)
        this.ctx.fillText("7", x + ancho / 2, y + alto / 2);
    }
}