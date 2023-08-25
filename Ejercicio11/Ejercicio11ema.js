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

function SepararFrase() {

    var oracion = document.getElementById("frase").value

    const palabraLarga = cadena => {

        const separadaEspacios = cadena.split(" ");

        let palabraLarga = separadaEspacios[0];

        for (const palabra of separadaEspacios) {

            if (palabra.length >= palabraLarga.length) {

                palabraLarga = palabra;

            }
        }

        return palabraLarga;
    }

    var palabra = palabraLarga(oracion);
    document.getElementById("palabra").innerHTML = "La palabra mas larga es: " + palabra;


}

//version toma mas palabras de la misma longitud
function palabraMasLarga() {
    // Solicita al usuario que ingrese una serie de palabras separadas por espacios
    let palabras1 = document.getElementById("frase1").value.split(" ");
    
    //let palabras = prompt("Ingresa una serie de palabras separadas por espacios:").split(" ");
    // Inicializa la longitud máxima y el arreglo de palabras largas
    let maxLongitud = 0;
    let palabrasLargas = [];
    // Recorre cada palabra del arreglo de palabras
    for (let palabra of palabras1) {
        // Si la longitud de la palabra es mayor que la longitud máxima actual
        if (palabra.length > maxLongitud) {
            // Actualiza la longitud máxima y el arreglo de palabras largas
            maxLongitud = palabra.length;
            palabrasLargas = [palabra];
        } else if (palabra.length === maxLongitud) {
            // Si la longitud de la palabra es igual a la longitud máxima, agrega la palabra al arreglo de palabras largas
            palabrasLargas.push(palabra);
        }
    }
    // Muestra el resultado en una ventana emergente
    //alert(`La(s) palabra(s) más larga(s) es/son: ${palabrasLargas.join(", ")}`);

    document.getElementById("palabra1").innerHTML = "Las Palabras más largas son: " + palabrasLargas.join(" - ");


}