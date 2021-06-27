'use strict'

//funciones 

function calcu(n1,n2,mostar=false)// mostar es un parametro opcional que esta predefinido en false
{
    if(mostar==false) { displayconsola(n1,n2) }
    else { displaypagina(n1,n2) }
}

function displayconsola(n1,n2)
{
    console.log("suma: "+(n1+n2));
    console.log("resta: "+(n1-n2));
    console.log("multiplicacion: "+(n1*n2));
    console.log("division: "+(n1/n2));
    console.log("------------------------------");
}

function displaypagina(n1,n2)
{
    document.write("suma: "+(n1+n2)+"<br/>");
    document.write("resta: "+(n1-n2)+"<br/>");
    document.write("multiplicacion: "+(n1*n2)+"<br/>");
    document.write("division: "+(n1/n2)+"<br/>");
    document.write("------------------------------");
}
/*
for (var i=0;i<=10;i++)
{
    calcu(10,i);
    console.log(i);
}
*/