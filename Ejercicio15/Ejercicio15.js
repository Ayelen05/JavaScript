
function Circulo(radio,area,perimetro){
    this.radio = document.getElementById("radio").value
    this.area = calcularArea(this.radio);
    this.perimetro = calcularPerimetro(this.radio);

}


function calcularArea(radio){
	
	const pi =  Math.PI;

	var area = pi * Math.pow(radio,2);

    console.log(area)
	
}


    function calcularPerimetro(radio){

		
	const pi =  Math.PI;
	var perimetro = pi*radio*2;

	console.log(perimetro)
}

