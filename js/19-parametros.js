'use strict'

//parametros rest y spread

/*el parametro rest utiliza tres puntos antes del nombre de una variable q va a ser de tipo array
con un numero indefinido de parametros...
*/

/*
el parametro de forma spread usa tambien tres puntos antes ejemplo listafrutas(...frutas,"banano","sandia","kiwi","melon")
al hacer esto el array no sera el primer parametro sino cada uno de sus elementos tomarar una posicion 
en los parametros de la funcion teniendo el array fruta dos elementos
f1 seria manzana y f2 seria pera, dejando a cualquier otro paremetro en forma rest...
*/
var frutas =["manzana","pera"];


function listafrutas(f1,f2,...resto_de_frutas)
{
    console.log(f1);
    console.log(f2); 
    console.log(resto_de_frutas);//todos los parametros luego de los dos iniciales estaran en un array dinamico...
}


