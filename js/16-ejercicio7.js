'use strict'

do{ var tabla =parseInt(prompt("ingrese un numero",1)); }
while(isNaN(tabla))
document.write("<h1> tabla de multiplicar del 1 al 10 del numero: "+tabla+"</h1> ")
for(var i=1;i<=10;i++){
document.write(tabla+" X "+i+" = "+tabla*i+"<br/>")
}
