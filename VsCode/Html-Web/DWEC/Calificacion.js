var num = prompt('Introduzca la nota:');

if (!isNaN(num)) {
    console.log(num);
    switch (true) {
        case num == 0:
            alert("Muy deficiente")
            break;

        case num == 1:
            alert("Muy deficiente")
            break;

        case num == 2:
            alert("Muy deficiente")
            break;

        case num == 3:
            alert("Insuficiente")
            break;

        case num == 4:
            alert("Insuficiente")
            break;

        case num == 5:
            alert("Suficiente")
            break;

        case num == 6:
            alert("Bien")
            break;

        case num == 7:
            alert("Notable")
            break;

        case num == 8:
            alert("Notable")
            break;

        case num == 9:
            alert("Sobresaliente")
            break;

        case num == 10:
            alert("Sobresaliente")
            break;

        default:
            alert("Introduzca un número entre 0 y 10")
            break;
    }

    num = prompt('Introduzca la nota:');
}

else {
    alert("Introduzca solo números")

    num = prompt('Introduzca la nota:');
}
