nPersonas = prompt("Introduzca el número de personas que hay en la clase");
personas = [];

if (!isNaN(nPersonas)) {
    for (persona = 1; persona <= nPersonas; persona++) {
        var sexo = prompt("Introduzca el sexo de la persona nº " + persona + " de la clase: ");

        console.log(sexo);

        do
        {
            alert("Introduzca los valores h o m");
            sexo = prompt("Introduzca el sexo de la persona nº " + persona + " de la clase: ");
        } while(sexo != "h" || sexo != "m")

        personas.push(sexo);

        /*
        if (sexo != "h" || sexo != "m") {
            while (sexo != "h" || sexo != "m") {
                alert("Introduzca los valores hombre o mujer");
                sexo = prompt("Introduzca el sexo de la persona nº " + persona + " de la clase: ");
            }
        }

        else {
            personas.push(sexo);
        }
        */
    }

    console.log(personas);
}

else{
    alert("Introduzca únicamente números, por favor");
}