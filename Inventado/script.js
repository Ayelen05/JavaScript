//Variables

let palabra = document.getElementById("palabra");
let seccion1 = document.getElementById("seccion1");
let seccion2 = document.getElementById("seccion2");
let vector = [];
let vector2 = [];
let boton = document.getElementById("botonadivinar");
function jugar() {
    vector = document.getElementById("palabraoculta").value.split("");

    seccion1.style.display = "none";

    for (let i = 0; i < vector.length; i++) {
        vector2[i] = "_"
    }
    
    palabra.value = vector2;

    seccion2.style.display = "block";
}

function adivinar() {
    let letra = document.getElementById("letra").value;
    let noEstan = document.getElementById("noestan");
    let contGanar = vector.length;
    let contPerder = document.getElementById("intentos");
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] === letra) {
            vector2[i] = letra;
            contGanar--;
        }
    }
    if (!vector.includes(letra)){
        noEstan.value += letra;
        contPerder.value--;
    } 
    palabra.value = vector2;
if (!vector2.includes("_")) {
        setTimeout(() => {
            alert("ganaste!!😎🎉🎉");
          }, 500);
    }
if (contPerder.value == "0") {
    
boton.disabled = true;

    setTimeout(() => {
        alert("Perdiste!💩💩💩💩");
      }, 500);
}
}


/* console.log(jugar());*/