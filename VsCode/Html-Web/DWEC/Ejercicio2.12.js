var tamanioCuadrado = prompt("Introduzca el tamaño deseado del cuadrado:")
var anchoCuadrado;
var altoCuadrado;

for (var anchoCuadrado = 0; anchoCuadrado < tamanioCuadrado; anchoCuadrado++) {
    for (var altoCuadrado = 0; altoCuadrado < tamanioCuadrado; altoCuadrado++) {

        if (anchoCuadrado == 0 || anchoCuadrado == tamanioCuadrado - 1) {
            document.write("*");
        }

        else {
            if (altoCuadrado == 0 || altoCuadrado == tamanioCuadrado - 1) {
                document.write("*");
            }

            else {
                document.write("o");
            }
        }

    }

    document.write("<br>")
}