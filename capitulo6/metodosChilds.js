//METODOS DE CHILDS
const contenedor = document.querySelector(".contenedor");


//replaceChild() - (HijoNuevo, HijoAReemplazar);
const parrafo = document.createElement("P").innerHTML= "Parrafo";
const h2_nuevo = document.createElement("H2");
h2_nuevo.innerHTML="H2 NUEVO";

const h2_antiguo = document.querySelector(".h2");

contenedor.replaceChild(h2_nuevo, h2_antiguo); 



//removeChild()
//contenedor.removeChild(h2_antiguo);


//hasChildNodes()
let respuesta = h2_antiguo.hasChildNodes();
if(respuesta){
    document.write("El elemento tiene hijos")//El texto es un nodo, es decir un hijo
}else{
    document.write("No tiene hijos")//si h2 no tiene texto, no tiene hijos
}


//PROPIEDADES DE PARENTS - parentElement y Node son casi lo mismo
//SOLO EN CASOS MUY ESPECIFICOS SON DIFERENTES.
//parentElement
let res = h2_antiguo.parentElement;
res = h2_nuevo.parentElement;
console.log(res);//div del contenedor
//parentNode
res = h2_nuevo.parentNode;
console.log(res);




//PROPIEDADES DE SIBLINGS
//nextSibling


//previousSibling


//nextElementSibling



//previousElementSibling



