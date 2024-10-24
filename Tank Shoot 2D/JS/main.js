//Selecionamos el vanvas y el contexto
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

//Funcion para ajustar el tamaño de canvas a la ventana
function resizeCanvas(){
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.9;
}

//Llamamos a la funcion para cargar la pagina
resizeCanvas();

//Ajustamos el canvas cuando la ventana cambie de tamaño
window.addEventListener('resize', resizeCanvas);

//Creamos un objeto de juego
const game = new Game(canvas.width, canvas.height, 'start');

//Creamos un tanque de jugador y un tanque enemigo
const playerTank = new Tank(100, 100, 'up', 3);
const enemyTank = new EnemyTank(500, 100, 'down', 3);

//Dibujamos los elementos en el canvas 
function drawTank(tank) {
    ctx.fillStyle = 'green';
    //Representamos el tanque como un cuadro
    ctx.fillRect(tank.posX, tank.posY, 50, 50);
}

function drawEnemyTank(enemyTank) {
    ctx.fillStyle ='red';
    //Represetamos el tanque enemigo como un cuadrado
    ctx.fillRect(enemyTank.posX, enemyTank.posY, 50, 50);
}

//Logica del juego(actualizacion a la pantalla)
function updateGame(){
    //Limpiamos el canvas en cada frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawTank(playerTank);
    drawEnemyTank(enemyTank);

    //Refrescar los grafico
    requestAnimationFrame(updateGame);
}

//Inicar el juego
updateGame();