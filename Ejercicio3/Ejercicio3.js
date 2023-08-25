
function mayorEdad(){
  
	var edad = document.getElementById("prueba").value;
    
   if(edad > 18){
       document.getElementById("respuesta").innerHTML = "es mayor,puede ingresar a la pag.";

   }
   else{
       document.getElementById("respuesta").innerHTML = "es menor,no te hagas el pillo";

    }

}