/*

//función reverseString()

const string = "Parangaricutirimucuaro";

function reverseString(str) {
    let arrStr = str.split("");

    return arrStr.reverse().join("");
}

reverseString(string); // esto retorna 'oraucumirituciragnaraP' */

/* FORMA CON SUBSTRING MOSTRADO EN LA PÁGINA */

function FraseHTML() {


    var palabra = document.getElementById("frase").value;

    const reverseString = str => str.split("").reverse().join("");

    document.getElementById("espacio").innerHTML = "La frase Invertida es :" + reverseString(palabra);

}

// Invertir el texto de un string usando funciones flecha

/* const palabra = "Parangaricutirimucuaro";
const reverseString = str => str.split("").reverse().join("");
console.log(reverseString(palabra)); // esto retorna 'oraucumirituciragnaraP' */

// Invertir string usando un ciclo for

/* const string = "Parangaricutirimucuaro";

function reverseStringFor(str) {
    let arrStr = str.split("");
    let arrReverse = [];

    for (let i = arrStr.length; i >= 0; --i) {
        arrReverse.push(arrStr[i]);
    }

    return arrReverse.join("");
}

console.log(reverseStringFor(string)); // esto retorna 'oraucumirituciragnaraP' */