/*Escribir una función que reciba un String y devuelva la palabra más larga.
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript”*/

//** POR ALERTA */

/*var  oracion = prompt("escriba una frase para descubrir la palabra mas larga")
 
// separar por espacios
const palabraMasLarga = cadena => {
    const separadaPorEspacios = cadena.split(" ");

    let palabraMasLarga = separadaPorEspacios[0];

    for( const palabra of separadaPorEspacios){
       
        if(palabra.length >= palabraMasLarga.length){
           
            palabraMasLarga = palabra;
        }


    }
    

 return palabraMasLarga;

};

const palabra = palabraMasLarga(oracion);

alert("La oracion es :" + oracion);

alert("La palabra mas larga es :" + palabra);*/

//** POR CONSOLA */

/*oracion = prompt("escriba una frase para descubrir la palabra mas larga")
 
// separar por espacios
const palabraMasLarga = cadena => {
    const separadaPorEspacios = cadena.split(" ");

    let palabraMasLarga = separadaPorEspacios[0];

    for( const palabra of separadaPorEspacios){
       
        if(palabra.length >= palabraMasLarga.length){
           
            palabraMasLarga = palabra;
        }


    }
    

 return palabraMasLarga;

};

const palabra = palabraMasLarga(oracion);

console.log("La oracion es :" + oracion);

console.log("La palabra mas larga es :" + palabra);*/

//** POR HTML CON FUNCION */

/*function SepararFrase(){

    var oracion = document.getElementById("frase").value

    const palabraLarga = cadena => {

        const separadaEspacios = cadena.split(" ");

        let palabraLarga = separadaEspacios[0];
        
        for (const palabra of separadaEspacios){

            if(palabra.length >= palabraLarga.length){
            
           palabraLarga = palabra;

            }
        }
        
        return palabraLarga;
    }
    
    var palabra = palabraLarga(oracion);
    document.getElementById("palabra").innerHTML = "La palabra mas larga es: " + palabra;


}*/

//** EJEMPLO EMA, PARA QUE SE MUESTREN DOS PALABRAS IGUALES  */

/*function allLongestWords() {

    //var words = document.getElementById("frase").value

    let words = str.split(" ");
    let size = 0;
    let max = [""];
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length >= size) {
  //       console.log(words[i])
        size = words[i].length;
        if (max[max.length - 1].length < words[i].length) {
          max = [];
          max.push(words[i]);
        } else {
          max = [...max, words[i]];
        }
      }
    }
    return max;
  }
  
  console.log(allLongestWords("las palabra mas larga es "));
  console.log(allLongestWords("hola que tal"));*/



  //** EJERCICIO CAMI */
 /* let frase =prompt('ingrese una frase');
 alert(`Palabra mas larga:
 ${frase.split(' ').sort((a, b)=> b.length - a.length)[0]}
  `);*/