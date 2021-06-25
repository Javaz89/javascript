'use strict'

//switch
var edad = 18;
var imprime = '';
switch(edad)
{
    case 18:
        imprime = "ya tienes la mayoria de edad";
    break;
    case 25:
        imprime="Ya eres un adulto";
    break;
    case 40:
        imprime="Crisis de los cuarenta";
    break;
    case 75:
        imprime="Tas ruco";
    break;
    default:
        imprime="Tu eadad es neutra";
    break;
}
console.log(imprime);


