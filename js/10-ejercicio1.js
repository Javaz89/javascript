'use strict'
/*
programa que pida dos numeros y que diga cual es el mayor
menor y si son iguales....
PLUS: si los datos ingresados no son numeros o 
son menores que 0 pedir de nuevo el ingeso de datos
*/
do
{
    var n1 = parseInt(prompt("Ingresa 1 numero",0));
    var n2 = parseInt(prompt("ingresa otro numero",0));
}
while ((n1<0||n2<0)||(isNaN(n1)||isNaN(n2)))

var resultado = n1 - n2;

if (resultado>0) { alert("el numero mayor es: "+n1); }
else if(resultado<0) { alert("el numero mayor es: "+n2); }
else{alert("los numeros son iguales");}
