//ATRIBUTOS GLOBALES - Todos los elementos de html tienen 
//estos atributos

//class - lista de clases del elemento separadas por espacios

//contenteditable - indica si el elemento puede ser modificable 
//por el usuario (bool)
const titulo = document.querySelector(".titulo");

// titulo.setAttribute("contentEditable", "true");

//dir - indica la direccionalidad del texto
titulo.setAttribute("dir","ltr"); //left to right
//no es recomendable hacerlo desde el atributo ya que se puede
//hacer desde css
titulo.setAttribute("dir", "rtl");//right to left (tipo arabe)


//hidden - indica si el elemento aun no es, o ya no es, relevante.
titulo.setAttribute("hidden","false");//no importa si hidden es
//true o false, el texto se va a esconder con que hidden este definida
titulo.removeAttribute("hidden");


//id - define un identificador unico.

//style - contiene declaraciones de estilo css para ser aplicadas 
//al elemento.

//tabindex - indica si el elemento puede obtener un focus de input
// titulo.setAttribute("tabindex", "0"); 
//con tab te mueves de elemento focuseado
//  <h1 class="titulo" tabindex="2">Atributos Globales</h1>
//  <h1 class="titulo" tabindex="1">Atributos Globales</h1>
//  <h1 class="titulo" tabindex="3">Atributos Globales</h1>

//title - contiene un texto con informacion relacionada al elemento 
//al que pertenece.
titulo.setAttribute("title", "titulo del elemento"); 
//titulo del elemento al hacer hover al elemento