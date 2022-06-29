//FOR IN - Nos regresa la posicion (indice) de los valores
let animales = ["gato","perro","hamster"];
//tambien nos regreasa el NOMBRE de las propiedades, en este caso "edad"
animales.edad = 15;

for(animal in animales){
    document.writeln(animal + "<br>");
} //0,1,2, edad

for (animal in animales) {
  document.writeln(animales[animal] + "<br>");
}//gato, perro, hamster, edad

//FOR OF - Nos regresa el valor de los elementos
//NO regresa el valor de las propiedades, no imprime 15
for (animal of animales) {
  document.writeln(animal + "<br>");
}//gato, perro, hamster

///////////////////////////////

//LABEL

let array1 =["lala", "lele", "lulu"];
let array2 =["gil","rogel",array1, "garcia"];

//forLabel es el nombre de mi label que es como el nombre
//del primer for, el for padre
forLabel:
for(array in array2){
    if(array ==2){
        for(let array of array1){
            //para que se salte la iteracion del for padre (for in) y no la del for of
            continue forLabel;
            document.write(array + "<br>");    
        }
    }else{
        document.write(array2[array] + "<br>");
    }
}