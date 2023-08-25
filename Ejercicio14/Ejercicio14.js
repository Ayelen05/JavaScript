/*Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
numero de páginas.*/


//** POR CONSOLA. */
/*function libro (isbn,titulo,autor,numPag){

    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numPag = numPag;
}

let arrayLibro = [];

function CrearLibro(){
 
  let isbn = prompt("ingrese isbn del libro")
  let titulo = prompt("ingrese titulo del libro")  
  let autor = prompt("ingrese autor del libro")
  let numPag = prompt("ingrese numPag del libro")

  let libro1 = new libro(isbn,titulo,autor,numPag);
  arrayLibro.push(libro1);
   
return arrayLibro;
}

function fabricaDeLibros(){
   let op = "N";
    do {
        CrearLibro();
        op = prompt("desea crear otro libro? s/n");

    } while (op != "n");
    console.log(arrayLibro);
}
fabricaDeLibros();*/


//**  POR HTML CON FUNCION. (guarda uno o mas libros) */


function libro (isbn,titulo,autor,numPag){

    this.isbn = document.getElementById("isbn").value;
    this.titulo = document.getElementById("titulo").value;
    this.autor = document.getElementById("autor").value;
    this.numPag = document.getElementById("pag").value;

    
}

let arrayLibro = [];

function guardarLibro(){

    let libro1 = new libro()
    arrayLibro.push(libro1);

     return arrayLibro;
}

function MostrarLibro(){
    
   
    document.getElementById("mostrar").innerHTML = JSON.stringify(arrayLibro);

}