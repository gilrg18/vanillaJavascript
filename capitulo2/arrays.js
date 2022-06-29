//los arrays no son primitivos, son objetos.

let array = ["gil","rogel",26];
let frutas = ["banana", "manzanza","mango"];

document.writeln(frutas);//banana,manzana,mango
//todos los valores de un array estan declarados pero no
//inicializados, por eso sale undefined y no error al tratar
//de acceder a una posicion que "no existe"
document.writeln(frutas[3]);//undefined
