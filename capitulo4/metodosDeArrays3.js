//DE REPETICION

let nums = ["abecedario", "manzana", "pedro", "dedo","bobo","pedro"];

//filter() - crea un nuevo array con todos los elementos que cumplan la condicion
//filter recibe como parametro una funcion
nums.filter(numero => document.write(numero + "<br>")); //imprime todo
//lo mismo que
nums.filter(function(numero){
    document.write(numero + "<br>")
})

//regresar elementos con mas de 4 letras
resultado = nums.filter (numero => numero.length > 4);
document.write(resultado +"<br>") //abecedario,manzana,pedro,pedro

 
//forEach() - ejecuta la funcion indicada una vez por cada elemento del array
nums.forEach((numero) => document.write(numero + "<br>"));



//.map(function) - crea un nuevo array con los resultados de la llamada 
//a la funcion indicada aplicados a cada uno de sus elementos
let arr = [1,2,3,4,5];
resultado = arr.map( num => num * 2);
document.write(resultado + "<br>"); //2,4,6,8,10


//.reduce() - ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 5;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 15 porque el valor inicial es 5

//sumar los valores de un array:
var total = [0, 1, 2, 3].reduce(function (a, b) {
  return a + b;
});
console.log(total); //6

var total = [0, 1, 2, 3].reduce(function (a, b) {
  return a + b;
},5);
console.log(total); //11


//Integrar un array a partir de varios arrays
var integrado = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce(function (a, b) {
  return a.concat(b);
},[-2,-1]);

console.log(integrado)//[-2,-1,0, 1, 2, 3, 4, 5]