'use strict'

/*
el ambito de una variable depende del lugar en el que es definida
si c define a nivel de objeto se puede utilizar en todos los metodos 
que este tenga dentro, pero si se declara dentro de un metodo esta variable
es local y no puede ser uilizada ni a nivel de objeto, ni entre otros objetos
*/

function printtext(text){
    var world = "variable a nivel global"
    console.log(text);
    console.log()
}