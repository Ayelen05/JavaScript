






/** Ejercicio Gonza. */

let resultado = document.getElementById("resultado");


//FUNCIONALIDAD DEL BOTON
const botonCalcular = document.getElementById("boton");

botonCalcular.addEventListener("click",function () {
let inputDiametro = parseInt(document.getElementById("diam").value);    
    let radio = inputDiametro/2;
    let mensaje = document.createElement("p");
    
    mensaje.innerHTML = `El Radio es ${radio}`;
    
    
    resultado.appendChild(mensaje);
});



