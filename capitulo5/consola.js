//FUNCIONES DE REGISTRO

//assert() - aparece un mensaje de error en la consola si la afirmacion es falsa.
//si la afirmacion es verdadera, no parecera nada. (NO ESTANDAR)
console.assert(5>3);
console.assert(3 > 5);//Assertion failed: console.assert


//clear() - limpia la consola
console.clear(); //Console was cleared


//error() - Muestra un mensaje de error en la consola
console.error("la cagaste"); //la cagaste (en rojo)


//info() - Emite un mensaje informativo en la consola.
//en firefox y chrome, se muestra un pequeno icono "i" junto a estos elemento en el registro de la consola
console.info("saludos");
//hay una diferencia entre info y log pero es minima, dependiendo el navegador


//log() - muestra un mensaje en la consola ( o del interprete de javascript).
console.log("saludos");


//table() - toma un argumento obligatorio: data, debe ser un array u objeto, y un parametro adicional: columnos
//y nos muestra una tabla en la consola
console.table([4,3,1,23,23,45,1]) //tabla de indices y valores
console.table({hola: "hola", adios: "adios", what: "khe"})
console.table({
  //el primer nombre es el profesor
  fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
  programacion: ["Gil", "pedro", "juan", "pepito"],
  logica: ["Dalto", "pedro", "juan", "pepito", "cofla", "maria"],
  quimica: ["Maik", "pedro", "juan", "pepito", "cofla", "maria"],
});


//warn() - Imprime un mensaje de advertencia en la consola.
console.clear();
console.warn("Todo bien pero cuidado"); //mensaje amarillo de advertencia


//dir() - despliega una lista interactiva de las propiedades del objecto javascript
console.info([1, 2, 3, 4, 5]);//(5) [1, 2, 3, 4, 5]
console.dir([1,2,3,4,5]); //Array(5)

//especificado. [NO ESTANDAR]


//FUNCIONES DE CONTEO

//count() - registra el numero de veces que se llama a count(). 
//toma como argumento opcional una etiqueta.
console.count(); //default :1
console.count(); //default :2
console.count(); //default :3   
console.count(); //default :4

function sumar(num1, num2){
    document.write(num1,num);
    console.count();
} //sirve para sabes cuantas veces se ejecuta algo

//countReset() - resetea el contador console.count()
console.countReset();


//FUNCIONES DE AGRUPACION
//group()
console.group("Grupo Padre"); //abre como una carpetita en consola donde puedes hacer mas operaciones de consola
console.log("hola"); //este se hace dentro del group
console.group("frutas"); //grupo dentro de otro
//console.groupEnd(); //cerrar el grupo mas anidado
console.groupCollapsed("Nuevo grupo") // crea un nuevo grupo cerrado (sin expandir)
console.log("1");
console.log("2");
console.log("3");