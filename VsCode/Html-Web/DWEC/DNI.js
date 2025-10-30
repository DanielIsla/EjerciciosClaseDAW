var dni = prompt('Introduzca el DNI del que se obtendra la letra: ');

var continuar = true;

while (continuar == true) {
    if (isNaN(dni)) {
        alert("El DNI introducido no contiene solo numeros, intentelo de nuevo.");
    }

    else {
        if (dni.length != 8) {
            alert("El DNI introducido no contiene 8 numeros, intentelo de nuevo.");
        }
        else {
            var letra = dni % 23;
            var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']

            alert("La letra de ese dni es " + letras[letra]);
        }
    }

    if (dni = prompt('Introduzca el DNI del que se obtendra la letra: ')) {
        continuar = true;
    }
    else {
        continuar = false;
    }
}