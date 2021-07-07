'use strict'

//BOM -- browser object model
//todo lo que puede hacer el navegador web lo podemos controlar desde js 

function getBOM(){
console.log(window.innerHeight);
console.log(window.innerWidth);
console.log(screen.width);
console.log(screen.height);
console.log(window.location);
}

function redireccionar(link)
{
    window.location.href=link;
}

function abrirventana(link)
{
    window.open(link,"","width=400,height=300");
}
