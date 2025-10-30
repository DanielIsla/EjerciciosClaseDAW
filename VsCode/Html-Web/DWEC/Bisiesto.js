/*
alert("I'm = I am\nI don't = I do not");

var primer_saludo = "hola"
var segundo_saludo = primer_saludo

primer_saludo = "hello"
alert (segundo_saludo)
*/
var anio
var ok = false

while (ok == false) {

    anio = prompt('Introduce un año:')

    if (!isNaN(anio)) {

        ok = true

        if (Number.isSafeInteger(anio/4)) {
            alert("es bisiesto")
        }

        else {
            alert("NO es bisiesto")
        }
    }

    else {
        alert("Solo se pueden introducir números")
        anio = null
    }
}


