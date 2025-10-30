var radioCirculo = prompt("Introduzca el radio de la circunferencia/circulo");

var areaCirculo;
var longitudCircunferencia;


var fin = false;

while (fin != true) {
    if (isNaN(radioCirculo)) {
        alert("Introduzca el radio del circulo, en formato numerico")
        var radioCirculo = prompt("Introduzca el radio de la circunferencia/circulo");
    }

    else {
        areaCirculo = Math.PI * (radioCirculo * radioCirculo);

        longitudCircunferencia = 2 * Math.PI * radioCirculo;

        //alert("El area del circulo es " + areaCirculo + " , y la longitud de la circunferencia " + longitudCircunferencia);

        document.writeln("<h2> El area del circulo es " + areaCirculo + " , y la longitud de la circunferencia " + longitudCircunferencia + "</h2>");

        fin = true;
    }
}