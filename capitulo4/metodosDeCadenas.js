let cadena = "cadena de prueba prueba";
//igual que let cadena = new String("cadena de prueba");
//se crea un nuevo objeto String


//concat() - junta dos o mas cadenas y retorna una nueva
res = cadena.concat("hola");//cadena de pruebahola
//document.write(res);


//startsWith() - Si una cadena comienza con los caracteres de otra
//cadena, devuelve true, si no, false
//endsWith() - lo mismo pero al final
res = cadena.startsWith("lol"); //false
res = cadena.startsWith("cad");//true
res = cadena.endsWith("baba"); //false
res = cadena.endsWith("prueba"); //true
// document.write(res);


//includes() - si una cadena se encuentra dentro de otra, devuelve true

res = cadena.includes("gil"); //false;
res = cadena.includes("prueba"); //true;
// document.write(res);



//indexOf() - posicion en la que se encuentra la primera letra de la cadena que pases
//si se repite la palabra regresa el indice de la primera vez que se encuentre la palabra
res = cadena.indexOf("prueba")//10
// res = cadena.indexOf("Gil")// -1
// document.write(res);
// document.write(cadena[3]);//e


//lastIndexOf() - los mismo que indexof pero regresa el indice de la ultima vez que se encuentre la palabra
res = cadena.lastIndexOf("prueba")//17
// document.write(res);