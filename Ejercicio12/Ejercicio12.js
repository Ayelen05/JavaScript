/*Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de
dato.*/

//** POR ALERTA */

// EN FUNCION FLECHA SIEMPRE SE LLENA EL PARAMETRO . 

var valor = document.getElementById("miInput").value;
/*const funcionFlecha2 = valor => funcionFlecha(valor) */

const funcionFlecha = valor => console.log( "el dato ingresado es de tipo " + typeof(valor));

/*function llamarFuncionFlecha() {
    var valor = document.getElementById("miInput").value;
    
    funcionFlecha(valor);
}*/


//** EJERCICIO GONZA */

/*  Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de 
dato. */
let dato = true
let tipoDeDato = (a) => console.log(typeof a);
tipoDeDato(dato);