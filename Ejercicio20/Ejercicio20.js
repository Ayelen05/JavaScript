/*Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y
muestre el siguiente array [6, 9, 12, 15, 18].*/

/*let matriz = [[3], [6], [9], [12], [15]];

let array = matriz.map(subarray => subarray[0]+3);
console.log(array);*/


//** CON FLATMAP */
 
let matriz = [[3], [6], [9], [12], [15]];
let arr2 = matriz.flatMap(subarray => subarray[0]+3);

console.log(arr2)