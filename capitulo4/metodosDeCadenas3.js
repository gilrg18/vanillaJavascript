//METODOS QUE TRANSFORMAN UNA CADENA

//split() - divide la cadena como le pidamos
let cadena = "Hola como estas";

res = cadena.split(" "); //regresa un array: [Hola, como, estas]
//res = cadena.split(","); 
// document.write(res);//Hola,como,estas
// document.write(res[0]); Hola
// document.write(res[1]); como
// document.write(res[2]); estas


//Substring() - nos devuelve un pedazo de la cadena que seleccionemos
let cad = "ABCDEFG";
//substring(donde empieza (incluido), donde termina(sin incluir));
res = cad.substring(0,2);//AB 
// document.write(res);


//toLowerCase() - convierte a minuscula
//toUpperCase() - convierte a mayuscula
res = cad.toLowerCase();
// document.write(res); //abcdefg


//toString() - convierte a string
let num = 100;
res = num;
// document.write(res * 2); //200
// document.write(res / 2); //50
// document.write(res + 2); //102
// document.write(res.toString() + 2); //1002

let arr = ["gil", "rogel"];
res= arr.toString();
// document.write(`<br> ${res}`);//gil,rogel
// document.write(`<br> ${res[1]}`);//i
// document.write(`<br> ${res[3]}`);//,


//trim() - elimina espacios en blanco
let miCadena = "   Gil    Rog  ";

// document.write(miCadena.trim());//Gil Rog



//.length - propiedad de las cadenas y arrays de tamano

//trimEnd() - Elimina los espacios del final
//trimStart() - Elima los espacios del principio

//valueOf() - retorna el valor primitivo del objeto especificado.

document.write(miCadena.valueOf());// Gil Rog, es una mamada, regresa el valor de la cadena