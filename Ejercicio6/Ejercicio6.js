//**  POR CONSOLA */
/*var num = parseInt(prompt("ingrese el numero"));

if(num == 0){
     console.log("el numero no es par ni impar")
}else if( num % 2 == 0){
     console.log("El numero es par")
}else{
    console.log("el numero es impar")
}*/

//** POR ALERT */

/*var num = parseInt(prompt("ingrese el numero"))

if(num == 0){
    alert("el numero no es par ni impar")
}else if( num % 2 == 0){
    alert("El numero es par")
}else{
   alert("el numero es impar")
}*/


//** POR PANTALLA CON FUNCION */

function ParImpar(){
    
    var num = parseInt(document.getElementById("num").value);
    
    if(num == 0){
        document.getElementById("resultadito").innerHTML = "el numero no es par ni impar"
    }else if( num % 2 == 0){
        document.getElementById("resultadito").innerHTML = "el numero es par"
    }else{
       document.getElementById("resultadito").innerHTML = "el numero es impar"
     }
}
