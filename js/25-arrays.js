'use strict'

//arreglos o matrices, coleciones de datos del mismo o diferente tipo incluso arreglos dentro
//de otros arreglos(arreglos multidimensionales)

var arraynombres=["Jairo Vasquez","Zulma Flores","Joaquin Vargas",3,true,"papaya","pupo",12];
var objetoarray=new Array("C#","JS","JAVA");

console.log(arraynombres);//de esta manera se obtiene todo el array
console.log(objetoarray[2]);//adjuntando el indice se obtiene solo el valor almacenado en ese espacio
console.log(arraynombres.length);//este metodo proporciona la cantidad de elementos en el array.

//0 siempre sera el primer indicie en esta estructura
//
do { var elemento = parseInt(prompt("elige un numero entre: 0 y "+(arraynombres.length-1)),0); }
while(!((elemento>=0)&&(elemento<arraynombres.length)))//do while deja de repetirse cuando la condiciones falsa
alert(arraynombres[elemento]);

//ejercicio crear una lista ordenada con un ciclo de los elementos del arreglo arraynombres

document.write("<h1>Aprendiendo js ejercicio arreglo</h1>");
document.write("<ol>")
for (var i = 0;i < arraynombres.length;i++) { document.write("<li>"+arraynombres[i]+"</li>") }
document.write("</ol>")
 
/*metodo forEach tiene una funcion de callback con tres parametros definidos
el primero es el valor almacenado en el indice que esta recorriendo, el segundo 
es el indice, y el tercero es el arreglo
forEach(callbackfn: (
    value: string | number | boolean, 
    index: number,
    array: (string | number | boolean)[]) 
    => void, thisArg?: any): void
*/
document.write("<ol>")
arraynombres.forEach((elementos,x)=>{document.write("<li>"+x+" - "+elementos+"</li>")});
document.write("</ol>")

//en resumen en foreach itera todo el arreglo y con su fucion de callback vuelve mas limpia la solucion


/** alternativo a foreach se puede utilizar un for con la palabra in entoces se asigna a una 
 * variable cada uno de los indices dentro del arreglo 
*/
document.write("<ol>");
for(let indice in arraynombres){document.write("<li>"+arraynombres[indice]+"</li>")}
document.write("</ol>")
