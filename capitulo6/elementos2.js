//CREACION DE ELEMENTOS
const contenedor = document.querySelector(".contenedor");

//createElements()
//tiene que ser en mayuscula ("LI") porque asi createElement reconoce a
//los elementos.
const item = document.createElement("LI"); 
document.write(item +"</br>") //[object HTMLLIElement]


//createTextNode()
const textDelItem = document.createTextNode("Buenas tardes gil");
//MAL - para esto se usa appendChild()
//item.innerHTML = textDelItem;
//console.log(textDelItem); //<li>[object Text]</li> 


//appendChild()
item.appendChild(textDelItem);
contenedor.appendChild(item);
contenedor.appendChild(item);//un elemento es unico y un elemento
//unico no se puede agregar dos 
//Este for consume muchos recursos porque cada que creas algo nuevo en el DOM,
//el DOM borra todo y lo vuelve a crear con el nuevo elemento, entonces se
//gastan muchos recursos innecesariamente, que se arregla con "createDocumentFragment()"
for (let i = 0; i<10; i++){
    const item = document.createElement("LI");
    const texto = document.createTextNode("Gil " + i);
    item.appendChild(texto);
    contenedor.appendChild(item);
}
console.log(item);//<li>Buenas tardes gil</li>; 


//createDocumentFragment() -ecmaScript 6 - soluciona consumo de recursos en exceso

const miContenedor = document.querySelector(".contenedor");
const fragmento = document.createDocumentFragment();

for(i=0; i<10;i++){
    const item = document.createElement("LI");
    const texto = document.createTextNode("Ejemplo de fragmentos "+ i);
    item.appendChild(texto);
    fragmento.appendChild(item); 
}//y ahora si nomas agregar el fragmento al contenedor
console.log(fragmento); //para ver los li creados del fragmento (document-fragment)

miContenedor.appendChild(fragmento);