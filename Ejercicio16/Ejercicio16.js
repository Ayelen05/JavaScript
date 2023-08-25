/*Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
y los muestre por pantalla.*/


let vector1 = [];
let vector2 = [];

for (let i = 0; i< 5; i++) {
    
    /** rendondea para abajo. numeros enteros */
   /*vector1[i] =  Math.floor(Math.random() * 10) + 1;
   vector2[i] = Math.floor(Math.random() * 10) + 1;/

   //** tofixed, muestra con la cantidad de decimales que uno quiere () */
    vector1[i] = (Math.random()*10+1).toFixed(2);
    vector2[i] = (Math.random()*10+1).toFixed(2);
}

console.log(vector1);
console.log(vector2);
