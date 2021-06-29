'use strict'

var numero = 666;
var text1 = "Hola javaz";
var text2 = "how are you?";

var dato = numero.toString(); //convierte a string un numero..

console.log(typeof dato);// typeof consulta el tipo de la variable

console.log(dato);
dato=text1.toLowerCase();//vuelve todo minuscula
console.log(dato);
dato=text2.toUpperCase();//vuelve todo mayuscula
console.log(dato);

//lenght obtiene la longitud de una objeto en un string cuenta los caracteres
//en un array los items, etc

console.log(text2.length);

//concatenar se puede realizar con un signo + el cual simplemente unira las 
//cadenas, tambien existe el metodo concat

var totaltext = text1.concat(" "+text2); // con un bucle puede agregarse texto con este metodo...
console.log(totaltext);
