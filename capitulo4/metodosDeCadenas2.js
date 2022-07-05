//METODOS PARA RELLENAR CADENAS
//padStart() [propuesta de estandar] - rellennar cadena al principio con los caracteres desados.
//padEnd() Lo mismo pero al final
let cadena = "abc";
let cadena2= "";

//6 es la cantidad de caracteres totales que queremos
//"1" es la cadena que queremos usar para rellenar los caracteres faltantes
res = cadena.padStart(6, "1234"); //123abc porque el 4 no alcanza a meterse 
document.write(res);

res = cadena.padEnd(6,"1"); ///abc111
// document.write(res);


//repeat() - regresa la misma cadena pero repetida las veces que queramos
let cad = "123 ";

res = cad.repeat(4);//123 123 123 123
document.write(res);
