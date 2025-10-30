var combJugador1 = prompt("Introduzca la combinacion");

var combRival;

var nIntentos = 0;
var maxIntentos = 8;

if (isNaN(combJugador1) || combJugador1.length != 4) {
    //Metemos la combinacion a adivinar, si uno de ellos no es un numero, los pide de nuevo
    do {
        alert("La combinacion a buscar no es un numero o no tiene 4 cifras");
        combJugador1 = prompt("Introduzca de nuevo la combinación");
    }
    while (isNaN(combJugador1) || combJugador1.length != 4)
}

//Dejamos que el rival introduzca la combinación, si uno de ellos no es un numero, los pide de nuevo
//Le damos 8 oportunidades
while (nIntentos < maxIntentos) {

    combRival = prompt("Introduzca el intento");

    if (isNaN(combRival) || combJugador1.length != 4) {
        do {
            alert("No es un número o no tiene 4 cifras, intentelo de nuevo");

            combRival = prompt("Introduzca de nuevo el intento");
        }
        while (isNaN(combRival) || combJugador1.length != 4)
    }

    //Un intento mas pasa
    nIntentos++;

    //Si el rival acierta la combinacion, sale del bucle
    if (combRival.charAt(0) == combJugador1.charAt(0) && combRival.charAt(1) == combJugador1.charAt(1) && combRival.charAt(2) == combJugador1.charAt(2) && combRival.charAt(3) == combJugador1.charAt(3)) {
        alert("Has ganado");
        break;
    }

    else {
        alert("No has acertado la combinación. Te quedan " + (maxIntentos - nIntentos) + " intentos");

        for(i = 0; i < combJugador1.length; i++)
        {
            if(combRival.charAt(i) == combJugador1.charAt(i))
            {
                alert( i + " Posicion | Num introducido: " + combRival.charAt(i) + " :  Tocado! ");
            }

            else if(combRival.charAt(i) == combJugador1.charAt(0) || combRival.charAt(i) == combJugador1.charAt(1) || combRival.charAt(i) == combJugador1.charAt(2) || combRival.charAt(i) == combJugador1.charAt(3))
            {
                alert(i + " Posicion | Num introducido: " + combRival.charAt(i) + " :  Herido");
            }

            else
            {
                alert(i + " Posicion | Num introducido: " + combRival.charAt(i) + " :  No esta");
            }
        }
    }
}
