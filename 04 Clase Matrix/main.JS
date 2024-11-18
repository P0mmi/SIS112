// Esperamos a que el contenido de la página esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
    // Definimos el tamaño de la matriz (filas y columnas) y el tamaño de cada celda
    const filas = 20;         // Número de filas en la matriz
    const columnas = 20;      // Número de columnas en la matriz
    const anchoCelda = 25;    // Ancho de cada celda en píxeles
    const altoCelda = 25;     // Alto de cada celda en píxeles

    // Creamos una instancia de la clase Matriz, la cual dibujará en el canvas
    // El primer parámetro es el id del canvas, seguido de las filas, columnas, ancho y alto de las celdas
    window.matriz = new Matriz("matrixCanvas", filas, columnas, anchoCelda, altoCelda);
});
