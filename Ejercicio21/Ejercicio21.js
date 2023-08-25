/*Escribir un programa para obtener un array de las propiedades de un objeto Persona.
Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.*/

let per = new Array();
let persona1 ;
let persona2 ;
function persona (nombre,edad,sexo,peso,altura) {
    this.nombre = nombre;
    this.edad = edad;
    this.sexo = sexo == "H" ? "hombre" : sexo == "M" ? "mujer" : sexo == "O" ? "otro" : undefined;
    this.peso = peso;
    this.altura = altura;


}

 persona1 = new persona("gonza",31,"H",70,1.73);
 
 per.push(persona1);

persona2 = new persona("ayelen" , 32,"M",63,1.60);

per.push(persona2);

console.log(per);