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
