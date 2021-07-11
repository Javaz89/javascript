'use strict'



/**
 * al colocar la carga del script de js en el <head><script></script></head> de la pagina html
 * este no podria hacer referencia a objetos que luego son creados en el body xq aun no se
 * ha cargado... entoces para solucionar esto se puede utilizar un evento del documento que se llama
 * load que se desencadenaria luego que la pagina ya este cargada... siempre con addEventListener...
 */
window.addEventListener('load', () =>
{
    /**eventos del mouse
    * detecta el click del mouse en el boton y cambia el color 
    */
    function colorboton()
    {
        console.log("me dio click");
        var bg = boton.style.background;
        if (bg=="green"){
            boton.style.background="red";
    
        }
        else{
            boton.style.background="green";
        }
        boton.style.padding ="10px";
        boton.style.border = "1px solid #ccc"
        return true;
    }
    //esta variable boton hace referencia al objeto boton creado en html con id = boton1
    var boton = document.querySelector("#boton_inicio");
    
    //input...
    var texto=document.querySelector("#input_nombre");
    
    //captura el evento click
    boton.addEventListener('click', function(){colorboton();});
    
    // mouseover mouse encima del boton
    boton.addEventListener('mouseover',function(){boton.style.background="yellow";});
    
    // mouseout mouse sale del boton
    boton.addEventListener('mouseout',function(){boton.style.background = "#ccc";});
    
    //focus este evento se desencadena cuando el usuario esta dentro del cuadro de texto...
    texto.addEventListener('focus',function(){console.log("estas dentro del campo de texto");});
    
    //blur detecta cuando el usuario abandona el campo de texto
    texto.addEventListener('blur',function(){console.log("has salido del campo texto");});
    
    //keydown captura cual es la tecla fisica presionada del teclado sin importar su caracter como tal
    texto.addEventListener('keydown',
    function(event){console.log("presionaste la tecla: ", event.keyCode);});
    
    //keypess captura el caracter que devuelve la tecla o combinacion de teclas presionadas...
    texto.addEventListener('keypress',
    function(event){console.log("la tecla presionada corresponde al caracter: ", String.fromCharCode(event.keyCode));});
    
    //keyup este evento se desencadena luego de soltar la tecla,
    texto.addEventListener('keyup',
    function(event){console.log("se ha liberado la tecla: ", event.keyCode);});
});

