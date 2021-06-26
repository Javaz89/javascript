'use strict'
var suma=0; var vueltas=0;
do
{
    var number1 = parseInt(prompt("Ingrese un numero: ",0));
    if (isNaN(number1)){number1=0;vueltas--;}
    vueltas++;
    suma+=number1;//+= es como poner suma+number1
}
while(number1>=0)
suma -= number1;
console.log("la suma es: "+suma+" la media es: "+suma/(vueltas-1));
