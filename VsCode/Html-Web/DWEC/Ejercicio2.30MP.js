var combJugador1 = prompt("JUGADOR 1: \nIntroduzca la combinacion");
var combJugador2 = prompt("JUGADOR 2: \nIntroduzca la combinacion");


var combRivalJugador1;
var combRivalJugador2;

var nIntentosJugador1 = 0;
var nIntentosJugador2 = 0;

var jugador1Gana = false;
var jugador2Gana = false;

var maxIntentosJugadores = 8;

if (isNaN(combJugador1) || combJugador1.length != 4) {
    //Metemos la combinacion a adivinar, si uno de ellos no es un numero, los pide de nuevo
    do {
        alert("JUGADOR 1: \nLa combinacion a buscar no es un numero o no tiene 4 cifras");
        combJugador1 = prompt("JUGADOR 1: \nIntroduzca de nuevo la combinacion");
    }
    while (isNaN(combJugador1) || combJugador1.length != 4)
}

if (isNaN(combJugador2) || combJugador2.length != 4) {
    //Metemos la combinacion a adivinar, si uno de ellos no es un numero, los pide de nuevo
    do {
        alert("JUGADOR 2: \nLa combinacion a buscar no es un numero o no tiene 4 cifras");
        combJugador2 = prompt("JUGADOR 2: \nIntroduzca de nuevo la combinacion");
    }
    while (isNaN(combJugador2) || combJugador2.length != 4)
}

alert("Todo listo, comienza el juego");

//Dejamos que el rival introduzca la combinación, si uno de ellos no es un numero, los pide de nuevo
//Le damos 8 oportunidades
while (jugador1Gana == false || jugador2Gana == false) {
    if (nIntentosJugador1 < maxIntentosJugadores) {

        combRivalJugador1 = prompt("JUGADOR 1: \nIntroduzca el intento");

        if (isNaN(combRivalJugador1) || combJugador1.length != 4) {
            do {
                alert("JUGADOR 1: \nNo es un numero o no tiene 4 cifras, intentelo de nuevo");

                combRivalJugador1 = prompt("JUGADOR 1: \nIntroduzca de nuevo el intento");
            }
            while (isNaN(combRivalJugador1) || combJugador1.length != 4)
        }

        //Un intento mas pasa. Si en vez de una combinación se introduce un formato incorrecto, se pide de nuevo
        nIntentosJugador1++;

        //Si el rival acierta la combinacion, sale del bucle
        if (combRivalJugador1.charAt(0) == combJugador1.charAt(0) && combRivalJugador1.charAt(1) == combJugador1.charAt(1) && combRivalJugador1.charAt(2) == combJugador1.charAt(2) && combRivalJugador1.charAt(3) == combJugador1.charAt(3)) {
            alert("JUGADOR 1: \nHas ganado");
            break;
        }

        else {
            alert("JUGADOR 1: \nNo has acertado la combinacion. Te quedan " + (maxIntentosJugadores - nIntentosJugador1) + " intentos");

            for (i = 0; i < combJugador1.length; i++) {
                if (combRivalJugador1.charAt(i) == combJugador1.charAt(i)) {
                    alert("JUGADOR 1: \n " + i + "Posicion | Num introducido: " + combRivalJugador1.charAt(i) + " :  Tocado! ");
                }

                else if (combRivalJugador1.charAt(i) == combJugador1.charAt(0) || combRivalJugador1.charAt(i) == combJugador1.charAt(1) || combRivalJugador1.charAt(i) == combJugador1.charAt(2) || combRivalJugador1.charAt(i) == combJugador1.charAt(3)) {
                    alert("JUGADOR 1: \n "+ i +"Posicion | Num introducido: " + combRivalJugador1.charAt(i) + " :  Herido");
                }

                else {
                    alert("JUGADOR 1: \n" + i + "Posicion | Num introducido: " + combRivalJugador1.charAt(i) + " :  No esta");
                }
            }
        }
    }



    //Dejamos que el rival introduzca la combinación, si uno de ellos no es un numero, los pide de nuevo
    //Le damos 8 oportunidades
    if (nIntentosJugador2 < maxIntentosJugadores) {

        combRivalJugador2 = prompt("JUGADOR 2: \nIntroduzca el intento");

        if (isNaN(combRivalJugador2) || combJugador1.length != 4) {
            do {
                alert("JUGADOR 2: \nNo es un numero o no tiene 4 cifras, intentelo de nuevo");

                combRivalJugador2 = prompt("JUGADOR 2: \nIntroduzca de nuevo el intento");
            }
            while (isNaN(combRivalJugador2) || combJugador1.length != 4)
        }

        //Un intento mas pasa. Si en vez de una combinación se introduce un formato incorrecto, se pide de nuevo
        nIntentosJugador2++;

        //Si el rival acierta la combinacion, sale del bucle
        if (combRivalJugador2.charAt(0) == combJugador2.charAt(0) && combRivalJugador2.charAt(1) == combJugador2.charAt(1) && combRivalJugador2.charAt(2) == combJugador2.charAt(2) && combRivalJugador2.charAt(3) == combJugador2.charAt(3)) {
            alert("JUGADOR 2: \nHas ganado");
            break;
        }

        else {
            alert("JUGADOR 2: \nNo has acertado la combinación. Te quedan " + (maxIntentosJugadores - nIntentosJugador2) + " intentos");

            for (i = 0; i < combJugador2.length; i++) {
                if (combRivalJugador2.charAt(i) == combJugador2.charAt(i)) {
                    alert("JUGADOR 2: \n" + i + "Posicion | Num introducido: " + combRivalJugador2.charAt(i) + " :  Tocado! ");
                }

                else if (combRivalJugador2.charAt(i) == combJugador2.charAt(0) || combRivalJugador2.charAt(i) == combJugador2.charAt(1) || combRivalJugador2.charAt(i) == combJugador2.charAt(2) || combRivalJugador2.charAt(i) == combJugador2.charAt(3)) {
                    alert("JUGADOR 2: \n "+ i + "Posicion | Num introducido: " + combRivalJugador2.charAt(i) + " :  Herido");
                }

                else {
                    alert("JUGADOR 2: \n "+ i + "Posicion | Num introducido: " + combRivalJugador2.charAt(i) + " :  No esta");
                }
            }
        }
    }
}