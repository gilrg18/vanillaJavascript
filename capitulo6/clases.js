//CLASES, CLASSLIST Y METODOS DE CLASSLIST
const titulo = document.querySelector(".titulo");

//add() - aniade una clase
titulo.classList.add("grande");

//remove() - remueve una clase
titulo.classList.remove("grande");

//item() - devuelve la clase del indice especificado
let valor = titulo.classList.item(2);
//document.write(valor); //circular (2 es el indice de la clase "circular")

//contains() - verifica si ese elemento posee o no, la clase especificada
let nombreClase = "equisde";
valor = titulo.classList.contains(nombreClase); //true
if(valor){
    document.write(`La clase "${nombreClase}" existe`);
}else{
     document.write(`La clase "${nombreClase}" NO existe`);
     titulo.classList.add(nombreClase);
}


//replace() - reemplaza una clase por otrea
valor = titulo.classList.replace("equisde", "adios");
document.write("<br>" + valor); // true
//si la clase equisde no existe, regresa false

//toggle() - si no tiene la clase especificada
//la agrega, si ya la tiene, la elimina

valor = titulo.classList.toggle("grande");// la activa
document.write("<br>" + valor); // cuando se activa es true
valor = titulo.classList.toggle("grande");// la desactiva
document.write("<br>" + valor);// cuando se desactiva es false
titulo.classList.toggle("grande", true);// la activa
titulo.classList.toggle("grande", false);// la desactiva