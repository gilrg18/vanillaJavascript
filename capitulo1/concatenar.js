let saludo = "Hola Gil! ";
let pregunta = "Como estas?";

let frase = saludo + pregunta;

document.writeln(frase);

let num1 = 5;
let num2 = 8;

//FORZAR STRING
//poner "" convierte todo en un string
let numString = "" + num1 + num2; //58
let numNumber = num1 + num2 //13

document.writeln(numString);

//.concat Funcion de cadenas
//solo funciona con string, no numeros
let n1 = "1";
let n2 = 2;
//si n1 es un numero tira error: n1.concat is not a function
let n3 = n1.concat(n2);
document.writeln(n3); //12


let frase1 = "Gilberto"
let frase2 = "Soy " + frase1 + ", buenas tardes"
console.log(frase2);




