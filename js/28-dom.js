'use strict'

//DOM (Document Object Model)


/** con getElementById puedo extraer el elemento completo de html en la pagina siempre y cuendo
 * concuerde con el id de este, es posible modificarlo o consultarlo ....
 * con innerHTML obtengo solo lo que se encuentra dentro del objeto.
*/

function changecolor(color){
    caja.style.background=color;
}

// obtener elementos con un Id especifico...

//var caja=document.getElementById("almacenaje");// se invoca a un elemento del html a traves de su Id
var caja=document.querySelector("#almacenaje");//se usa "#" para seleccionar elementos por id, "." para clases

caja.innerHTML="modificando el texto del objeto con id almacenaje al que la variable caja hace referencia";
caja.style.background='red';
caja.style.padding="20px";
caja.style.color="white";
caja.className="hola";

//obtener elemento a traves de etiqueta
var todoslosdivs = document.getElementsByTagName('div');
var seccion = document.querySelector("#seccion1");
var hr = document.createElement("hr");
var hr2 = document.createElement("hr");

seccion.append(hr);
for(let indice in todoslosdivs)
{
    if(typeof todoslosdivs[indice].textContent =='string')
    {
        var parrafo = document.createElement("p");
        var texto=document.createTextNode(todoslosdivs[indice].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}
seccion.append(hr2);
//obtener elemento a traves de su clase
console.log(seccion);
