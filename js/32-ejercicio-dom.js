'use strict'

window.addEventListener('load', ()=>{ 
    console.log("formulario iniciado...");
    let formulario = document.querySelector("#formulario1");
    let cajaPunteada = document.querySelector(".punteada");
    cajaPunteada.style.display = "none";

    //cuando se presiona el boton o input de tipo submit se desencadena este evento
    formulario.addEventListener("submit",()=>{
        /*se crea una variable contenedor que hace referencia al objeto cotenedor en el html en este objeto
        se agregara cada elemento del diccionario datosUsuario
        */        
        let contenedor = document.getElementById("contenedor");

        //mientras el parafo <p> llamado contenedor tenga un primer elemento este sera eliminado...
        while (contenedor.firstChild) {
          contenedor.removeChild(contenedor.firstChild);
        }
        let nombre = document.querySelector("#nombre").value;
        let apellido=document.querySelector("#apellido").value;
        let edad = parseInt(document.querySelector("#edad").value);

        if (nombre.trim()==null || nombre.trim().length==0)
        {
            alert("El nombre no es valido");
            let errorNombre = document.getElementById("errorNombre")
            errorNombre.innerHTML = "Error en nombre";
            errorNombre.style.display="block";
            return false;
        } 
        else 
        {
            document.getElementById("errorNombre").style.display = "none";
        }
        if (apellido.trim()==null||apellido.trim().length==0){
            alert("El apellido no es valido");
            return false;
        }
        if (edad <= 0 || isNaN(edad)){ 
            alert("La edad no es valida");
            return false;
        }
        let datosUsuario = new Map();// creacion de un diccionario en js
        datosUsuario.set("Nombre: ",nombre);
        datosUsuario.set("Apellido: ",apellido);
        datosUsuario.set("Edad: ",edad);
        datosUsuario.forEach((valor,clave)=>{
            let parrafo = document.createElement("p");
            parrafo.innerHTML = `${clave} ${valor}`;
            contenedor.appendChild(parrafo);
        });
        cajaPunteada.style.display = "block";
    })
})