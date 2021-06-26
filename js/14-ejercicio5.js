'use strict'

do
{ var divisores = parseInt(prompt("ingrese un numero",0)); }
while(isNaN(divisores));
document.write("Estos son los divisores de: "+divisores+"<br/>")
for (var i =0; i<=divisores;i++)
{
    if ((divisores%i)==0)
    document.write(i+"<br/>")
}

