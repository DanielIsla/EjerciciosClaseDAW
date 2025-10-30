var fecha = new Date();

var dia = fecha.getDay();
var dayText;

var diaMes = fecha.getDate();

var mes = fecha.getMonth();
var monthText;

var year = fecha.getFullYear();
var anioText;


console.log(mes);
console.log(year);
console.log(dia);
console.log(diaMes);


switch (true) {
    case dia == 0:
        dayText = "Domingo";
        break;

    case dia == 1:
        dayText == "Lunes";
        break;

    case dia == 2:
        dayText = "Martes";
        break;

    case dia == 3:
        dayText = "Miercoles";
        break;

    case dia == 4:
        dayText = "Jueves";
        break;

    case dia == 5:
        dayText = "Viernes";
        break;

    case dia == 6:
        dayText = "Sábado";
        break;
}

switch (true) {
    case mes == 0:
        monthText = "Enero";
        break;

    case mes == 1:
        monthText = "Febrero";
        break;

    case mes == 2:
        monthText = "Marzo";
        break;

    case mes == 3:
        monthText = "Abril";
        break;

    case mes == 4:
        monthText = "Mayo";
        break;

    case mes == 5:
        monthText = "Junio";
        break;

    case mes == 6:
        monthText = "Julio";
        break;

    case mes == 7:
        monthText = "Agosto";
        break;

    case mes == 8:
        monthText = "Septiembre";
        break;

    case mes == 9:
        monthText = "Octubre";
        break;

    case mes == 10:
        monthText = "Noviembre";
        break;

    case mes == 11:
        monthText = "Diciembre";
        break;
}

alert("Hoy es " + dayText + " " + diaMes +" de " + monthText + " del año " + year + " , " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds());