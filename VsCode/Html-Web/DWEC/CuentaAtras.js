var num;

while (true) {
    num = prompt('Introduce un número para la cuenta atrás:');

    if (!isNaN(num)) {
        while (num > 0) {
            num--;

            setTimeout(500);

            alert(num);
        }
    }
}