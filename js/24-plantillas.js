'use strict'

//plantillas de texto


var firstname = prompt("ingresa el nombre",);
var lastname=prompt("ingresa tus apellidos");

var texto = "mi nombre es: "+firstname+" mis apellidos son: "+lastname;



//pero este texto no esta formateado y se ve feo
//para eso existen plantillas


var texto =`
    <h1>hello</h1>
    <h3>mi nombre es: ${firstname}</h3>
    <h3>y mis apellidos son: ${lastname}</h3>
    `;
    document.write(texto);

//esta plantilla interpola la variable con $ no es necesario concatenar ...
//