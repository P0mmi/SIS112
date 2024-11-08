//Todo lo basico que tiene el juego
class Game{
    ancho;
    alto;
    cantColumnas; // valores calculados a partir de la "ancho"
    cantFilas; //Valores calculados a partir de la "alto"
    altoCelda;
    anchoCelda;

    estadoJuego;

    constructor(_ancho,_alto,_estadoJuego){
        this.ancho = _ancho; //valor del ancho ???
        this.alto = _alto; //valor del alto ???
        this.estadoJuego = _estadoJuego;


        var utilsObj = new Utils();
        this.cantColumnas = CANT_COLUMNAS; //utilsObj.Redondear(this.ancho);
        this.cantFilas = CANT_FILAS; //utilsObj.Redondear(this.alto);
        this.anchoCelda = Math.round(this.ancho / this.cantColumnas);
        this.altoCelda = Math.round(this.alto / this.cantFilas);


        console.log("cantColumnas", this.cantColumnas);
        console.log("cantFilas", this.cantFilas);
        console.log("anchoCelda", this.anchoCelda);
        console.log("altoCelda", this.altoCelda);
    }

    start(){
        this.estadoJuego = "playing";
        //iniciar otros elementos como tanques, puntuacion, etc.
    }
 
    reset(){
        this.estadoJuego = "reset";
        //reiniciar las puntuaciones de los tanques, puntuaciones,etc.
        
    }
   

}