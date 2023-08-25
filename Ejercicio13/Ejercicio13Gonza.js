//** POR CONSOLA. */

/*function persona (nombre,edad,sexo,peso,altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo == "H" ? "hombre" : sexo == "M" ? "mujer" : sexo == "O" ? "otro" : undefined;
    this.peso = peso;
    this.altura = altura;
}

let persona1 = new persona("gonza",31,"H",70,1.73);
console.log(persona1)*/



function Persona(nombre, edad,sexo,peso,altura){

 this.nombre = document.getElementById("nombre").value;
 this.edad = document.getElementById("edad").value;
 this.sexo = document.getElementById("sexo").value;
 this.peso = document.getElementById("peso").value;
 this.altura = document.getElementById("alt").value;
  
 

}

function mostrar() {

    
    let persona1 = new Persona();

document.getElementById("mostrar").innerHTML = JSON.stringify(persona1);

}
