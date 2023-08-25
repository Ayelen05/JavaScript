/*Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
y los muestre por pantalla. */
let MAX = 5;
const vector = (longitud) => {
    const vector = [];
    for (let i = 0; i < longitud; i++) {
        vector.push(Math.floor(Math.random() * 10) + 1);
    }
    return vector;
};
function iniciar() {
    const longitud = parseInt(
        document.getElementById("longitud").value
    );
    const nuevoVector1 = vector(longitud);
    const nuevoVector2 = vector(longitud);

    const vectorContainer1 = document.getElementById("vector1");
    const vectorContainer2 = document.getElementById("vector2");

    vectorContainer1.innerHTML = "";
    vectorContainer2.innerHTML = "";

    for (let i = 0; i < longitud; i++) {
        const vectorItem1 = document.createElement("div"); //crea un nuevo div para contener el vector
        vectorItem1.className = "vector-item"; //le da la clase
        vectorItem1.innerText = nuevoVector1[i]; //se le da a el nuevo div el 1ro dato del vactor
        vectorContainer1.appendChild(vectorItem1); //se manda el elemento creado a vectorContainer

        const vectorItem2 = document.createElement("div"); //crea un nuevo div para contener el vector
        vectorItem2.className = "vector-item"; //le da la clase
        vectorItem2.innerText = nuevoVector2[i]; //se le da a el nuevo div el 1ro dato del vactor
        vectorContainer2.appendChild(vectorItem2); //se manda el elemento creado a vectorContainer
    }
}