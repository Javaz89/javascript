'use strict'

//mostrar todos los numeros impares entre 2 numeros introducidos...
var mayor=0;
var menor=0;
do
{
    var numero1= parseInt(prompt("ingrese un numero",0));
    var numero2=parseInt(prompt("ingrese otro numero",0));
}
while((isNaN(numero1)||isNaN(numero2)))
if (numero1>numero2){mayor=numero1; menor=numero2;}
else if (numero2>numero1){menor = numero1;mayor= numero2;}
else{mayor=menor=numero1;}
document.write("<h1>De "+menor+" a "+mayor+" estan estos numeros: </h1>");
for(var i=menor+1;i<mayor;i++)
{
    if (i%2!=0) { document.write(i+"<br/>"); }  
}