//clase de todos los objetos q aparezcan el juego 
class Obstacule{
    nombre;
    src;
    posX;
    posY;
    tipo;

    constructor(_posX, _posY, _nombre, _tipo, _src){
        this.posX =_posX;
        this.posY =_posY;
        this.nombre =_nombre;
        this.tipo =_tipo;
        this.src =_src;
    }

    render(){

    }
} 