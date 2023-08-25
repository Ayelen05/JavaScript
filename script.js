
var edad = prompt("Ingresa tu edad:", 10); /* INGRESAR DATOS */
var numeros = [1, 2, 3, 4, 5, 6, 7, 8]; /* CREAR UN ARRAYLIST */
var nums = new Array(1, 2, 3, 4, 5, 5, 9, 9, 10, 10); /* CREACIÓN DE ARRAY */
var setNumeros = new Set(nums); /* GENERAR UN SET A PARTIR DE UN ARRAY. NO PERMITE DUPLICADOS */
var setLetras = new Set("aaasssddd".split("")); /* GENERAR UN ARRAY EN BASE A UN STRING */
var mapa = new Map(); /* CREAR UN MAPA */

mapa.set(1, "Silvana"); /* AÑADIR INFO AL MAPA */
mapa.set(2, "Sari");
mapa.set(3, "Amaite");

var personas = [
    {
        nombre: "Lucila",
        apellido: "Spataro"
    },
    {
        nombre: "Ayelen",
        apellido: "Marti"
    },
    {
        nombre: "Jesica",
        apellido: "Mansilla"
    }
];

var numero1 = 123; /* VARIABLE TIPO NUMBER */
numero2 = "123"; /* VARIABLE TIPO STRING */
var flag = true; /* VARIABLE TIPO BOOLEANO */
var flag1 = null; /* VARIABLE TIPO OBJETO */
var flag2; /* VARIABLE SIN DEFINIR */

var mensaje = `La edad ingresada es
....
.... ${edad}`; /* TEMPLATE STRING */


alert(mensaje);
alert("Hola desde el Script.js. Tu edad es " + edad + " Años."); /* VENTANA EMERGENTE */

alert("El tipo de dato de NÚMERO 1 es " + typeof numero1);
alert("El tipo de dato de NÚMERO 2 es " + typeof numero2);
alert("El tipo de dato de FLAG es " + typeof flag);
alert("El tipo de dato de FLAG 1 es " + typeof flag1);
alert("El tipo de dato de FLAG 2 es " + typeof flag2);


console.log("Hola, estoy en la consola"); /* MENSAJE EN LA CONSOLA */
console.log(numeros); /* MENSAJE EN CONSOLA DEL ARRAYLIST */
console.log(personas); /* MENSAJE EN CONSOLA DEL ARRAYLIST */
console.log(numeros.reverse()); /* MENSAJE EN CONSOLA DEL ARRAYLIST ORDENADO AL REVES */
console.log(personas.forEach((aux) => console.log(aux.apellido + " Apellido del Sujeto."))); /* MENSAJE EN CONSOLA DEL ARRAYLIST CON FUNCIÓN FOREACH */
console.log(numeros[0]); /* MENSAJE EN CONSOLA DEL ARRAYLIST EN LA POSICION INDICADA EN LOS CORCHETES */
console.log(numeros.length - 1); /* MENSAJE EN CONSOLA DEL ARRAYLIST EN LA ULTIMA POSICIÓN */
console.log(JSON.stringify(numeros)); /* MENSAJE EN CONSOLA DEL ARRAYLIST CONVERTIDO A STRING */
console.log(numeros.filter((aux) => aux % 2 == 0)); /* MENSAJE EN CONSOLA DEL ARRAYLIST FILTRANDO POR UN PARAMETRO DADO (EJ NROS PARES) */
console.log(numeros.map((aux) => aux * 5)); /* MENSAJE EN CONSOLA DEL ARRAYLIST MODIFICANDO POR UN PARAMETRO DADO (EJ CADA NRO SE MULTIPLICA POR 5) */

/* JSON */
var persona = { /* OBJETO */
    apellido /*KEY*/: "Espiñeira" /*VALUE*/,
    nombre: "Emanuel",
    nacimiento: new Date("10-30-1987"),
    dni: 33304517,

    mascota: { /* OBJETO AGREGADO AL OBJETO PERSONA */
        apodo: "Nina",
        Id: 2022,
        nacimiento: new Date("02-28-2021")
    },

    mascotas: [ /* ARRAYLIST DE MASCOTAS */
        {
            apodo: "Oso",
            Id: 2016,
            nacimiento: new Date("12-25-2016")
        }, {
            apodo: "Fofi",
            Id: 2015,
            nacimiento: new Date("06-18-2015")
        }
    ]
}

var mascota = { /* OBJETO */
    apodo: "Chiquito",
    Id: 2023,
    nacimiento: new Date("10-30-2020")
}



console.log(persona); /* MOSTRAR OBJETO */
console.log(mascota); /* MOSTRAR OBJETO */
console.log(persona.apellido + " " + persona.nombre); /* MOSTRAR SOLO ALGUNOS ATRIBUTOS */
console.log(persona.apellido + " " + persona.mascota.apodo); /* MOSTRAR SOLO ALGUNOS ATRIBUTOS */
console.log(persona.mascotas[0].apodo); /* MOSTRAR POSICION DEL ARRAYLIST */
