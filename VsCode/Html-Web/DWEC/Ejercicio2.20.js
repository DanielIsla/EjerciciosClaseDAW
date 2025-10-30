var operacion = 0;
var numeroOperar;

operacion = prompt("Salir\nSumatorio\nFactorial");

while (operacion != 1) {
    switch (true) {
        case operacion == 2:
            numeroOperar = prompt("Introduzca el numero del que quiere hacer el Sumatorio");

            var sumatorio = 0;

            for (num = 1; num <= numeroOperar; num++) {
                sumatorio = sumatorio + num;
            }

            alert("El sumatorio es: " + sumatorio)

            operacion = prompt("Salir\nSumatorio\nFactorial");
            break

        case operacion == 3:
            numeroOperar = prompt("Introduzca el numero del que quiere hacer el Factorial");
            var factorial = 0;

            for (num = 1; num <= numeroOperar; num++) {
                factorial = factorial * num;
            }

            alert("El factorial es: " + factorial)

            operacion = prompt("Salir\nSumatorio\nFactorial");
            break;
        default:
            alert("Elija una de las opciones del menú, por favor")
            operacion = prompt("Salir\nSumatorio\nFactorial");
            break;
    }
}