var valores = [];
var cuantosValores = 10;
var mediaValores = 0;

for(i = 0; i < cuantosValores; i++)
{
    var num = prompt("Introduzca un numero para calcular la media:")

    valores.push(num);
}

for(i = 0; i < valores.length; i++)
{
    mediaValores = mediaValores + valores.indexOf[i]
}

console.log(mediaValores);

mediaValores = mediaValores/cuantosValores;

alert("Para los valores: " + valores + " ,la media es: " + mediaValores)