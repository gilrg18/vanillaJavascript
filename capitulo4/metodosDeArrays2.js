//ACCESORES - El array original no se modifica

//join() - une todos los elementos de una matriz(u objeto similar)
//en una cadena y la devuelve
let numeros = ["gil","rogel","garcia"];
// document.write(numeros[0] + "<br>");//gil (posicion 0 del arreglo)
// let resultado = numeros.join("<br>elemento: ");
// document.write(resultado[0] + "<br>");//g (se convierte a cadena y la posicion 0 de gilrogelgarcia es g)
// document.write("elemento: "+resultado+"<br>"); 
// elemento: gil;
// elemento: rogel;
// elemento: garcia;


//slice() - devuelve una parte del array dentro de un nuevo array 
//empezando por inicio hasta fin( fin no incluido )
document.write(numeros + "<br>");
let res = numeros.slice(0,2);
//todos los elementos:
//.slice(0);
//todos menos el ultimo
//.slice(0,-1);
//todos menos los ultimos x valores
//.slice(0,-x);
document.write(res +"<br>")//gil,rogel



//Metodos ya vistos en cadenas:
//.includes("gil")//true
//.indexOf("gil")//0, -1 si no se encuentra
//.lastIndexOf("gil")//regresa la ultima posicion donde se encuentre "gil"
//.toString()//convierte el contenido a string