'use strict'

//todas las tablas de 1 al 10

for(var i=1;i<=10;i++)
{
    document.write("<h1>Esta es la tabla del: "+i+"</h1>")
    for(var j=1;j<=10;j++)
    {
        document.write(j+" X "+i+" = "+j*i+"<br/>")
    }
}