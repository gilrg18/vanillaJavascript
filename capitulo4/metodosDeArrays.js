//TRANSFORMADORES - transforman el array original a algo nuevo

//pop() - elimina el ultimo elemento de un array y lo  devuelve
let nombres = ["gil", "rogel", "garcia"];
// document.write("Array original: <b>" +nombres + "</b><br>")
//let res = nombres.pop(); //garcia
// document.write(res + "<br>"); 
// document.write(nombres + "<br>"); //gil, rogel


//shift() - elimina el primer elemento y lo devuelve
//res = nombres.shift(); //gil
// document.write(res + "<br>"); 
// document.write(nombres + "<br>"); //rogel


//push() - agrega un elemento al final de la lista y regresa la cantidad de elementos
// let res = nombres.push("miguel"); //4
// document.write(res + "<br>") //4
// document.write(nombres + "<br>");//gil,rogel,garcia,miguel
// res = nombres.push("angel","siu");//6
// document.write(res + "<br>") //4


//reverse() - invierte el orden de los elementos de un array
// let res = nombres.reverse()
// document.write(res + "<br>"); //garcia, rogel gil
// document.write(nombres + "<br>") //garcia, rogel gil


//unshift() - agrega uno o mas elementos al inicio del array, y devuelve la nueva longitud (push pero agrega al principio)
// let numeros = [1,2,3,4,5]
// document.write("Array original: <b>" + numeros + "</b><br>");
// res = numeros.unshift(0,1,2); 
// document.write(res + "<br>"); //8
// document.write(numeros + "<br>"); //0,1,2,1,2,3,4,5


//sort() - ordena los elementos de un arreglo y lo devuelve
// let numeros = [5,1,3,2,4]
// document.write("Array original: <b>" + numeros + "</b><br>");
// res = numeros.sort(); 
// document.write(res + "<br>"); //1,2,3,4,5
// document.write(numeros + "<br>"); //1,2,3,4,5

// let alfabeto = ["g","z","a","c","b"];
// res = alfabeto.sort(); 
// document.write(res + "<br>"); //a,b,c,c,g,z
// document.write(alfabeto + "<br>"); //a,b,c,c,g,z


//splice() - cambia el contenido de un array elimanndo elementos
//existentes y/o agregando nuevos elementos.
let numeros = [1,2,3,4,5];
document.write("Array original: <b>" + numeros + "</b><br>");
//Si Quieres eliminar elementos usas dos valores como parametros
//splice(1,3) - elimina los valores [1],[2] y [3]
//splice(1,3, 999) - sustituye
//let res = numeros.splice(1,3);
// document.write(res + "<br>"); //2,3,4
// document.write(numeros + "<br>");//1,5
let res = numeros.splice(1,3, 999,888,777,555);
document.write(res + "<br>"); //2,3,4
document.write(numeros + "<br>");//1,999,5

//Agregar al final sin borrar
//.splice(-1,0, 1,2,3,4)
//Agregar al principio sin borrar
//.splice(0,0,999)
//Agregar desde donde quieras sin borrar
//.splice(x,0,999)