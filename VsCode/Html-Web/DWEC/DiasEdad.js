var nombreUsuario = prompt('Introduzca su nombre');
var edadCalcular = prompt('Introduzca su edad: ');
 
if(isNaN(edadCalcular))
{
    alert("La edad introducida no es un numero");
}

else
{
    var dias = edadCalcular * 365;
    document.writeln("<h2> " + nombreUsuario + " ha vivido " + dias + " dias </h2>");
}