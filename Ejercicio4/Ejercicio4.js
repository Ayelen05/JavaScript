function ingresarLetra(){

	var letra = document.getElementById("letras").value;
	
  
	if(letra == "a"  || letra =="s"){
		document.getElementById("letritas").innerHTML = "LETRA CORRECTA";

	}
	else{
		document.getElementById("letritas").innerHTML = "LETRA INCORRECTA";
	}
}