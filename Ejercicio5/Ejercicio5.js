//***OPCION ALERTA
/*var num1 = parseInt(prompt("ingrese el primer num"));
var num2 = parseInt(prompt("ingrese el segundo num"));

var op = prompt("ingrese la operacion que desee 's' suma, 'r' resta, 'm' multiplicacion', 'd' division")

switch (op.toUpperCase()) {
    case 'S':
        var resultado = num1 + num2;
        console.log(resultado);
        break;
    case 'R':
        var resultado = num1 - num2;
        console.log(resultado);
        break;
    case 'M':
        var resultado = num1 * num2;
        console.log(resultado);
        break;
    case 'D':
        var resultado = num1 / num2;
        console.log(resultado);
        break;
    default:
        break;

}
alert("el resultado es " + resultado)*/

//***OPCION CONSOLA
/*let nun1 = parseInt (prompt("Ingrese el primer numero"));
let num2 =parseInt( prompt("Ingrese el segundo numero"));
let op = prompt("ingrese que operacion quiere realizar");
switch (op.toUpperCase()) {
    case 'S':
        console.log(nun1 + num2);
        break;
    case 'R':
        console.log(nun1 - num2);
        break;
    case 'M':
        console.log(nun1 * num2);
        break;
    case 'D':
        console.log(nun1 / num2);
        break;

    default:
        break;
}*/


//***OPCION PAGINA */

function Operacion(){

    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);

   var op = document.getElementById("op").value;
   
    switch (op) {
        case "suma" :
            var resultado = num1 + num2 ;
            
            break;
            case "resta":
                var resultado = num1 - num2 ;                
                break;

                case "multiplicacion":
                    var resultado = num1 * num2 ;                
                    break;
                
                    case "division":
                        var resultado = num1 / num2 ;                
                        break;
                        
        default:
            break;
    }

    document.getElementById("resultadito").innerHTML = "el resultado es " + resultado;

}

