//Metodos de atributos de un elemento
//querySelector solo selecciona el primer elemento de la clase seleccionada
const rangoEdad = document.querySelector(".rangoEdad");

//document.write(rangoEdad); //[object HTMLInputElement]

document.write("<br></br>"+rangoEdad.getAttribute("type"));//range
//setAttribute("atributo a modificar", "nuevo valor")
rangoEdad.setAttribute("type","text");
document.write("<br></br>" + rangoEdad.getAttribute("type"));//color

//No tiene valor, pero esta definido
rangoEdad.setAttribute("type", "");

//Quita el atributo type del elemento.
rangoEdad.removeAttribute("type");

//element.setAttribute
//element.removeAttribute
//element.getAttribute