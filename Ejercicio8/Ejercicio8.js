
//** Alerta */


/*var suma = 0;
var max = 0;
var min = 0;
var cont = 0;



do {
    var num = parseInt(prompt("ingrese un numero"))
    if(num !=0){
     if(cont == 0){    
       max = num
       min = num
     }
     cont ++;
     suma += num;
    if(num < min){
        min = num
    }
     if(num > max){
        max = num
     } 
    
    }   
   

} while (num != 0);

var promedio = suma/cont;
alert("el promedio de todos los num es : " + promedio);
alert("el num maximo ingresado es : " + max);
alert("el num minimo ingresado es : " + min);


/*
let num, max = 0, min = 0, cont = 0, suma = 0;

do {
    num = parseInt(prompt("ingrese un numero"));
    console.log(num);
    
    if (num != 0) {

        if (cont == 0) {
            min = num;
            max = num;
        }
        cont++;
        console.log(`contador   ${cont}`);
        suma += num;
        if (num < min) {
            min = num;
        }
        if (num > max) {
            max = num;
        }
    }
} while (num != 0);


console.log(`El promedio es: ${suma / cont}, el minimo es: ${min}, el maximo es: ${max}`);*/


//** POR CONSOLA */

/*var suma = 0;
var max = 0;
var min = 0;
var cont = 0;



do {
    var num = parseInt(prompt("ingrese un numero"))
    if(num !=0){
     if(cont == 0){    
       max = num
       min = num
     }
     cont ++;
     suma += num;
    if(num < min){
        min = num
    }
     if(num > max){
        max = num
     } 
    
    }   
   

} while (num != 0);

var promedio = suma/cont;
console.log("el promedio de todos los num es : " + promedio);
console.log("el num maximo ingresado es : " + max);
console.log("el num minimo ingresado es : " + min);*/


//** CON FUNCION. */
var suma = 0;
function Numero() {

    
  
    
    var max = 0;
    var min = 0;
    var cont = 0;

    do {
        var num = parseInt(document.getElementById("num")).valueOf
        if(num !=0){
         if(cont == 0){    
           max = num
           min = num
         }
         cont ++;
         suma += num;
        if(num < min){
            min = num
        }
         if(num > max){
            max = num
         } 
        
        }   
       
    
    } while (num != 0);
    
    var promedio = suma/cont;
    document.getElementById("resultado").innerHTML =  "el promedio de todos los num es : " + promedio;
    document.getElementById("resultado").innerHTML = "el num maximo ingresado es : " + max;
    document.getElementById("resultado").innerHTML = "el num minimo ingresado es : " + min;
    
 }