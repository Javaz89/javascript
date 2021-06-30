'use strict'

/** programa que pida 6 numeros y los almacene en un array
 * tiene que mostrar el array completo en el cuerpo de la pagina y en la cosola
 * debe estar ordenado normal y en reversa
 * mostar cuantos elementos tiene el arreglo
 * busqueda de un valor introducido por el usuario 
 * y que diga si esta en el array y su indice 
 */

var arreglonumeros = new Array(6); //areglo con 6 elementos

/** forEach es la funcion mas limpia para recorrer el arreglo
 * es entendible, el codigo se ve limpio.
*/
function displayarray(arreglo,textCustom = "") 
{
    document.write("<h1>Array contet "+textCustom+"</h1>");
    document.write("<ol>");
    arreglo.forEach((data)=>{document.write("<li>"+data+"</li>")})
    document.write("</ol>");
    console.log(arrayorder);
    console.log(arrayorder.length);
}

for (let i=0;i<6;i++)
{
    do { var value = parseInt(prompt("insert a numeric value",0)); }
    while(isNaN(value));
    arreglonumeros[i]=value;
}
/**
 * Callback...
 * Function used to determine the order of the elements. It is expected to return a negative
 *  value if first argument is less than second argument, zero if they're equal and a positive
 *  value otherwise. If omitted, the elements are sorted in ascending, ASCII character order.
 * [11,2,22,1].sort((a, b) => a - b)
 * Sorts an array in place. This method mutates the array and returns a reference to the same array.
 */
var arrayorder = arreglonumeros.sort((a,b)=>a-b);
displayarray(arrayorder,"in order");

var arrayorder = arreglonumeros.sort((a,b)=>b-a);
displayarray(arrayorder,"in reverse");

var value = parseInt(prompt("Enter a value to find it in the array",0));
var busqueda = arreglonumeros.findIndex((data) =>data==value);
if (busqueda>=0)
{
    console.log("el numero introducido "+arreglonumeros[busqueda]+" se encuentra en la posicion: "+busqueda);
}
else{console.log("numero no encontrado: "+value)};

console.log(arreglonumeros);



