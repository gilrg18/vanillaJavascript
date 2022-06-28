//Operadores de comparacion
let num = 1;
let num2 = 2;
let texto = "1";
let texto2 = "texto 2";

document.writeln(num==num2); //false
document.writeln(1 == 1);//true
document.writeln(texto != texto2);//true

//compara si el valor es igual
document.writeln(num == texto);//true

//compara si el valor y tipo de dato es igual 
//(estrictamente iguales)
document.writeln(num === texto);//false

document.writeln(num != texto);//false
document.writeln(num !== texto);//true

document.writeln(num > num2);//false
document.writeln(num < num2);//true

//////////////////////////////////////////////////////

//Operadores logicos
let valor = true;
let valor2 = true;

let resultado = valor && valor2;

let resultado2 = valor || valor2;

let resultado3 = !valor;

document.writeln(resultado);//true
document.writeln(resultado2); //true
document.writeln(resultado3); //false

document.writeln(`<div> <h1>${resultado3}</h1> </div>`);

