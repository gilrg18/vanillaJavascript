//METODOS DE SELECCION DE ELEMENTOS
// let parrafo = "Gilberto Rogel";

// document.write(parrafo);

//seleccionar el p con id "parrafo"
let parrafo;

parrafo = document.getElementById("parrafo");
document.write(parrafo); //[object HTMLParagraphElement]



//Regresa una lista de objetos
parrafo = document.getElementsByTagName("p");
document.write(parrafo);//[object HTMLCollection] 
document.write(parrafo[0]); //[object HTMLParagraphElement]



//clases se selecciona con .
parrafo = document.querySelector(".parrafo");
document.write(parrafo);//[object HTMLDivElement]
//id se selecciona con #
parrafo = document.querySelector("#garcia");
document.write(parrafo);//[object HTMLParagraphElement]



//selecciona todos los elementos de la clase
//regresa toda la lista de nodos
parrafo = document.querySelectorAll(".clase");
document.write(parrafo);//[object NodeList]
document.write(parrafo[3]); //[object HTMLParagraphElement]