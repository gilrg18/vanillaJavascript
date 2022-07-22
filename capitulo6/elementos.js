//OBTENCION Y MODIFICACION DE ELEMENTOS
//LOS USADOS SON textContent (Elemento a modificar)
//innerHTML (Elemento a <b style="visibility: hidden;">modificar</b>)
//outerHTML (<p class="titulo rojo circular equisde">Elemento a <b style="visibility: hidden;">modificar</b></p>)

const titulo = document.querySelector(".titulo");

//textContent - devuelve el texto de cualquier nodo.
let resultado = titulo.textContent;
//muestra todo el texto que esta adentro sin importar el style de las etiquetas
document.write(resultado +"<br>");// Elemento a modificar (sin incluir el efecto de <b> pero si el texto, que es "modificar")


//innerText - devuelve el texto visible de un node element.
resultado = titulo.innerText;
document.write(resultado + "<br>");// Elemento a modificar (sin incluir el efecto de <b> pero si el texto, que es "modificar")



//outerText - devuelve el texto que de las etiquetas html incluidas las etiquetas
//ya no se usa outerText
resultado = titulo.outerText;
document.write(resultado + "<br>");//Lo mismo que innerText y textContent

//innerHTML - devuelve el contenido html de un elemento
resultado = titulo.innerHTML;
document.write(resultado + "<br>");//tampoco muestra el hidden
//pero muestra en alert el interior de la etiqueta
alert(resultado); //Elemento a <b style="visibility: hidden;">modificar</b>


//outerHTML - devuelve el codigo HTML completo del elemento
resultado = titulo.outerHTML;
document.write(resultado + "<br>");//tampoco muestra el hidden
//pero muestra todo en alert todo el elemento
alert(resultado); //<p class="titulo rojo circular equisde">Elemento a <b style="visibility: hidden;">modificar</b></p>