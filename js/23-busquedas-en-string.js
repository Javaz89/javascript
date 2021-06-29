'use strict'

var numero = 12345;
var text01="texto de prueba de encontrado de";
var text02="texto 2 prueba xD";

//el indexof saca la posicion de la palabra y si existe o no encuentra la primera coincidencia

var busqueda=text01.indexOf("de");
console.log(busqueda);

//search es igual q index of
var busqueda=text01.search("de");
console.log(busqueda);

// este obtiene la posicion de la ultima plabra...
var busqueda=text01.lastIndexOf("de");
console.log(busqueda);

//match devuelve un arreglo con la palabra buscada el texto , etc...

var busqueda=text01.match("de");
console.log(busqueda);

//para que encuentre mas de una concidencia se coloca entre barras 
//para hacer una expresion regular y g de global y econtrara cuantas veces
//esta la palabra en la cadena...
var busqueda=text01.match(/de/g);
console.log(busqueda);


//substr recorta un segmento de la cadena dado un indice inicial y uno que
//representa cuantos caracteres despues de ese devolvera...
var busqueda=text01.substr(6,2);
console.log(busqueda);

//charAt saca una letra en concreto indicando el idice...
var busqueda=text01.charAt(6);
console.log(busqueda);

//tambien se puede consultar si el inicio de la cadena empieza
//de determinada forma con startsWith si la cadena inicia de esa forma 
//dira true sino false

var busqueda=text01.startsWith("text");
console.log(busqueda);

//de forma inversa endsWith revisa si la cadena termina con la palabra dada

var busqueda=text01.endsWith("de");
console.log(busqueda);

// y para saber si una palabra esta en la cadena en cualquier parte se utiliza
// includes si existe una concidencia o mas devuelve true de lo contrario false

var busqueda=text01.includes("javaz");
console.log(busqueda);

//tambien se puede buscar algo y reemplazarlo utilizando replace solo reemplaza
//la primera palabra encontrada...

var busqueda=text01.replace("de", "du");
console.log(busqueda);

//slice se utiliza para recortar la cadena a partir del indice dado
//devolvera de ese indice en adelante, pero si se especifica otro indice
//devolvera el texto que se encuentre entre ellos similar a substr...
var busqueda=text01.slice(6,8);
console.log(busqueda);

//split divide una cadena indicando una palabra a partir
// de la cual se dividira la cadena y devolvera un array
//puede ser uno o varios caracteres de division... estos se excluiran...

var busqueda=text01.split(" ");
console.log(busqueda);

//trim recorta o quita espacios que vacios que tenga delante y detras la cadena
var busqueda=text01.trim();
console.log(busqueda);




