
//** EN ALERTA  Y METODO SPLIT*/

/*var frase = prompt("ingrese la palabra");
var fraseConEspacio = frase.split("").join(' ');

alert(fraseConEspacio);*/

//** EN CONSOLA con split */

/*var frase = prompt("ingrese la palabra");
var fraseConEspacio = frase.split("").join(' ');

console.log(fraseConEspacio);*/

//** ejercicio9 alan.  */
/*function palabra(){
	
    var palabra = "hola";
    var palabraConEspacios = "";
    
    
    for (var i = 0 ; i < palabra.length ; i++) {
        palabraConEspacios += palabra.substring(i,i+1) + " ";
    }
    
    console.log(palabraConEspacios);
    
    
    }*/

//** CON FUNCION CON SUBSTRING */


function Frase() {


    var frase = document.getElementById("frase").value;
    var fraseConEspacio = " ";

  for (let i =0; i < frase.length; i++) {
    
    fraseConEspacio += frase.substring(i,i+1)+ " ";
    
  }

    document.getElementById("espacio").innerHTML = "La frase con espacio :" + fraseConEspacio;
    
}


