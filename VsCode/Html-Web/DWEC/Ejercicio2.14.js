var numeroAdivinar = Math.random(0,10);
console.log("debug: " + numeroAdivinar);
var numeroIntento = 0;
var maxIntentos = 5;

var intento;

intento = prompt("Introduce un intento")

while (numeroIntento < maxIntentos) {
    if (intento == numeroAdivinar) {
        alert("Has acertado el numero!!!");
        break;
    }

    else {
        if(intento > numeroAdivinar)
        {
            alert("Ese no era el número! Sigue intentandolo: " + (numeroIntento + 1) + "/" + maxIntentos + " El numero a buscar es menor")
        }

        else
        {
            alert("Ese no era el número! Sigue intentandolo: " + (numeroIntento + 1) + "/" + maxIntentos + " El numero a buscar es mayor")
        }
    }

    intento = prompt("Introduce el numero a adivinar:")

    numeroIntento++;
}

if (numeroIntento < maxIntentos) { }

else {
    alert("Has superado el numero de intentos, el numero era " + numeroAdivinar)
}
