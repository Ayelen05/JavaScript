/*A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
a) Determinar cual de los dos elementos de texto es mayor
b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
operadores necesarios para obtener un resultado true y otro resultado false
c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
dos elementos numéricos*/


var valores = [true,5,false,"hola","adios",2];

let pal1 = valores[3]
let pal2 = valores[4]

let mayor = pal1.length > pal2.length ? pal1 : pal2;
console.log(`La palabra mas larga es: ${mayor}`);

let ban1 = valores[0];
let band2 = valores[2];
let verdadero = ban1 || band2 ;
let falso = ban1 && band2;

console.log(`el resultado de la variable verdadero es: ${verdadero}`)
console.log(`el resultado de la variable falso es: ${falso}`)


let num1 = valores[1];
let num2 = valores[5];

let suma = num1 + num2;
console.log(`La suma de los numeros es: ${suma}`);



let resta = num1 - num2;
console.log(`La resta de los numeros es: ${resta}`);

let multi = num1 * num2;
console.log(`La multi de los numeros es: ${multi}`)

//** division */
console.log(`La multi de los numeros es: ${num1/num2}`);

//** mod */
console.log(`La multi de los numeros es: ${num1%num2 }`)
