'use strict'

var categorias = ["gaseosa","dulce","higiene","hidatante"];
var productos=["Coca cola","duce de mania","rasuradora","Gatorade"];

var tienda=[categorias,productos];

//arreglo multi dimensional...
//console.log(tienda[1][0]);

productos.push("sopa camaron");
//console.log(productos);

do
{
    var producto = prompt("ingresa un producto nuevo:");
    productos.push(producto);
}
while(producto!="FIN");
productos.pop();  //elimina el ultimo elemento ingresado
console.log(productos);

/*para eliminar un elemento en el arreglo q no sea el ultimo se debe primero hacer una busqueda
dentro del arreglo con la funcion indexOf y el elemento que se busca, tambien se puede definir
cuantos elementos depues de ese se borraran... indexOf(indice,elementos a borrar)*/

var indicebuscado = productos.indexOf("sopa camaron");
if(indicebuscado>-1){productos.splice(indicebuscado,1)}

console.log(productos);
/*con join() un arreglo unira todos sus elementos en una cadena pero entre cada uno de ellos tendra
una coma */ 
var productoscadena = productos.join();
console.log(productoscadena);

/* split vuelve una cadena en un arreglo especificando cual sera el caracter para separar
los elementos en este caso es la coma... */
var cadena = "a,b,c,e,d,f,h,g,a,b";
var cadenaarreglo=cadena.split(',');
console.log(cadenaarreglo);

/**existen dos metodos para ordenar un arreglo ya sea en orden alfabetico o al revez
 * son sort y reverse
 */
console.log(cadenaarreglo.sort());
console.log(cadenaarreglo.reverse());

/** busqueda en un array utilizando find 
 * find(predicate: (this: void, value: string, index: number, 
 * obj: string[]) => value is string, thisArg?: any): string
*/

var busqueda = cadenaarreglo.find(function(caracter){ return caracter == "Z";});
console.log(busqueda);

var busqueda = cadenaarreglo.find(caracter=>caracter == "a");
console.log(busqueda);

var busqueda = cadenaarreglo.findIndex(caracter=>caracter == "a");//IGUAL QUE FIND PERO BUSCA EL INDICE
console.log(busqueda);

/** en un arreglo numerico con el metodo some, se pueden encontrar mediante una comparacion
 * valores q cumplan cierta condicion por ejemplo
 */

var costos = [1,2,3,4,5,6,7,8,9,10];
var busqueda = costos.some(costo=>costo>4);//como existen valores que sean mayores que 4 devuelve true.
console.log(busqueda);