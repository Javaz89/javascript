'use strict'

window.addEventListener('load',()=>
{
    //  TIMERS

    //setInterval permite ejecutar un trozo de codigo cada x segundos
    var timeglobal = 0; //crea una referencia global al objeto setInterval que se crea en la funcion intervalo
    //con esta referencia se puede luego detener el objeto o volverlo a crear.
    setInterval(()=>
    {
        console.log("setinterval en ejecucion");
        var encabezado = document.querySelector("h1");//se crea una variable que hace referencia al objeto en html
        if(encabezado.style.color =="red")
        {
            encabezado.style.color="green";
        }
        else{encabezado.style.color="red ";}
        
    },3000);//el 3000 es intervalo en milisegundos
    
    //setTimeout se ejecuta una sola ves despues de una cantidad de tiempo en milisegundos
    setTimeout(() => {
        console.log("settimeout en ejecucion");
        var titulo2 = document.querySelector("h2");
        titulo2.style.color= "grey";
    }, 2000);


    var botonIniciar = document.querySelector("#inicioparpadeo");
    botonIniciar.addEventListener("click",()=>
    {
        console.log("Intervalo ciclico Iniciado");
        timeglobal = intervalo();
    });

    //variable que referencia al boton con id detenerparpadeo
    var botonDetener = document.querySelector("#detenerparpadeo");
    //se agrega al boton que se referencia con la variable el evento click, con una funcion anonima que
    //especifica que se realizara al este evento ocurrir.
    botonDetener.addEventListener("click",()=>
    { 
        console.log("Intervalo ciclico detenido");
        clearInterval(timeglobal);
    });

    //esta funcion intervalo crea una variable de tipo setinterval la cual es ciclica cambiando el color
    //del objeto con id parpadeoh3 en el documento intex.html el intervalo definido son 1000 milisegundos.
    //retorna la referencia al objeto de tipo setInterval, con esta referencia se puede deter el iterador de
    //tiempo.
    function intervalo(){
        var time3 = setInterval(() => {
            console.log("intervalo 3 iniciado");
            var h3selected = document.querySelector("#parpadeoh3");
            if(h3selected.style.color == "red"){
                h3selected.style.color = "green";
            }
            else{ h3selected.style.color = "red";}
        }, 300);
        return time3;
    }

});