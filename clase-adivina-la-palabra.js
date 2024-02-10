/* Juguemos a adivinar la palabra.

El usuario tiene 3 intentos para adivinar la palabra oculta.

Requerimientos:

-El juego debe tener una palabra oculta.
-El juego puede dar una pista de la palabra.
-El usuario debe ingresar una suposición.
-El juego debe verificar si la suposición del usuario es correcta.
-El juego debe tener un número limitado de intentos.
-El juego debe terminar cuando el usuario adivina la palabra o se queda sin intentos.

*/

let palabraOculta = "javascript";
let numeroIntentos = 3;

function verificarSuposicion (suposicion, palabraOculta) {
    if(suposicion.toLowerCase() === palabraOculta) {
        return true;
    } 
        return false;
};

function adivinarLaPalabra () {
    alert ("Bienvenido. Adivina la palabra oculta.");
    alert ("Tienes 3 intentos para adivinarla.");
    alert ("-pista- La palabra oculta es un lenguaje de programación.")

    while (numeroIntentos > 0) {
        let suposicion = prompt("Adivina la palabra.");

        if (verificarSuposicion (suposicion, palabraOculta)) {
             alert ("Correcto. Adivinaste la palabra.");
             break;
        }   else { 
        numeroIntentos--;
        if (numeroIntentos > 0) {
            alert (`Incorrecto. Tienes ${numeroIntentos}.`);
        } else {
            alert (`Agotaste tu número de intentos. La palabra oculta es ${palabraOculta}.`);
          };
       };
    };
};

adivinarLaPalabra();


