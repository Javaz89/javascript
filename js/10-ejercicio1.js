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
while (((n1<0 || n2<0)||(n1==NaN||n2==Nan))==false)

var resultado = n1 - n2;

switch(resultado)
{
    case resultado>0:
        alert("el numero mayor es: "+n1);
    break;
    case resultado<0:
        alert("el numero mayor es: "+n2);
    break;
    case 0:
        alert("los numeros son iguales");
    break;
    default:
        alert("valores incorrectos");
    break;
}

// o

