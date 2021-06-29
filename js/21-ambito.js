'use strict'

/*
el ambito de una variable depende del lugar en el que es definida
si c define a nivel de objeto se puede utilizar en todos los metodos 
que este tenga dentro, pero si se declara dentro de un metodo esta variable
es local y no puede ser uilizada ni a nivel de objeto, ni entre otros objetos
*/

var numero =12;
var text = "variable con ambito global";

function printtext(text){
    var world = "variable con ambito local";
    console.log(text);
    console.log(numero);
    console.log(world);
}

printtext(text);
console.log(world);