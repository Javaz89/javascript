'use strict'

//funcion anonima es aquella que no tiene nombre...

var pelicula=function(nombre)  { return "la pelicula es: "+nombre; }

/*
una funcion de call back es una funcion anonima que no tiene nombre y es parametro de otra
no esta estrictamente utilizada para algo concreto, se pasa anonimamente, y es asignada a una variable
*/

function sumame(n1,n2, sumaYmuestra, sumaX2)
{
    var sumar = n1+n2;
    sumaYmuestra(sumar);
    sumaX2(sumar);
    return sumar;
}

sumame
(
    5,
    7,
    function(dato){console.log("la suma es: ",dato);},
    function(dato){console.log("la suma por dos es: ",dato*2);}
);

/*
Existe otra forma de funcio anonima en js llamadas funciones de flecha y se omite la palabra function
y se coloca una flecha de esta manera se escribe de una manera mas limpia y entendible....
*/

sumame
(   
    3, 
    74, 
    dato=>{console.log("la suma es: ",dato);}, 
    dato=>{console.log("la suma por dos es: ",dato*2);} 
);
