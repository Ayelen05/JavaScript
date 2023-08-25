
//** POR ALERTA */
/* let limite = parseInt(prompt("ingrese el limite"));
let suma = 0;
while (suma < limite) {
    let num = parseInt(prompt("ingrese un numero"));
    suma += num;
    

}
alert("la suma de los numeros paso el limite! " + limite)*/

//** POR CONSOLA  */

/*let limite = parseInt(prompt("ingrese el limite"));
let suma = 0;
while (suma < limite) {
    let num = parseInt(prompt("ingrese un numero"));
    suma += num;
    console.log(suma);
}*/

//** ejercicio 7 ema. */


/*var n1 = prompt("Ingrese un Número Límite: ");

var mensaje = `Su LIMITE es ${n1}`;


var n, suma = 0;


do {
    n = prompt("Ingrese un Número:")
    suma = parseInt(n) + suma;
    alert(mensaje + " y ud ha sumado " + suma + " con los números ingresados...")
} while (suma < parseInt(n1));

alert("¡TE PASASTE DEL LÍMITE! :( ")*/

//** SE MUESTRA POR PANTALLA CON FUNCION */


var suma = 0;
function SumaLimite(){

    var limite = parseInt(document.getElementById("limite").value);
     
    var num = parseInt(document.getElementById("num").value);
    suma = num + suma;
    if (suma <= limite) {

        document.getElementById("resultadito").innerHTML= "La suma no supera al limite, ingrese otro numero  "+ suma; 
        
        
    } else {
        document.getElementById("resultadito").innerHTML = `La suma de los numeros super el limite `;
    }
  
}