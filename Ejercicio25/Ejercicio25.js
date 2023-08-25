/*Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del
siguiente formulario.*/


//** lo traigo con el nombre del imput */
function getFormValores(){
 let nombre = document.getElementsByName("nombre")[0].value;
 let apellido = document.getElementsByName("apellido")[0].value;
  
 alert(nombre +" "+ apellido);
}

//** lo traigo con id del form. */
/*function getFormValores(){
    let nombre = document.getElementById("form1").nombre.value;
    let apellido = document.getElementById("form1").apellido.value;
   
    alert(nombre + " " + apellido);
   }*/

