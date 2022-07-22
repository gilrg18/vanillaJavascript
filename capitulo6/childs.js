//OBTENCION Y MODIFICACION DE CHILDS
//h2, h4 y p son hijos del div
const contenedor = document.querySelector(".contenedor");

//firstChild - obtener el primer NODO hijo
const primerHijo = contenedor.firstChild;
console.log(primerHijo); //#text porque hay espacio entre el div y el h2
//#text tambien es un nodo entonces al ver espacio lo agarra como el primer hijo
//tienes que dejar el h2 pegadito al div para que el primer hijo sea h2
//ESTABA ASI: 
{/* <div class="contenedor">
        <h2>H2 :)</h2> */}
//TIENE QUE ESTAR ASI:
//<div class="contenedor"><h2>H2 :)</h2>

//lastChild
const ultimoHijo = contenedor.lastChild;
console.log(ultimoHijo); //igual va a ser #text al menos que p este pegadito al div


//firstElementChild - se puede hacer lo de firstChild sin tener que dejar los tags pegaditos
console.log(contenedor.firstElementChild)//h2


//lastElementChild
console.log(contenedor.lastElementChild)//p



//childNodes - todos los nodos hijos
const hijos = contenedor.childNodes;
console.log(hijos); //NodeList(7) [text, h2, text, h4, text, p, text]
//no es un arreglo, es un NODELIST
console.log(hijos[3]);//<h4>H4 jeje</h4>
//NO ES UN ARRAY (no se puede hacer push()) pero es un OBJETO 
//puedes usar forEach para recorrerlo
hijos.forEach(hijo => console.log(hijo));



//children - todas las ETIQUETAS html
const children = contenedor.children;
console.log(children); //HTMLCollection(3) [h2, h4, p]

//Un HTMLCOLLECTION no se puede recorrer con foreach
//children.forEach((hijo) => console.log(hijo));
//IN regresa indicies
for(hijo in children){ 
    console.log(hijo);
}
//OF regresa elementos
for (hijo of children) {
  console.log(hijo);
}