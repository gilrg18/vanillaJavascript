//Un bloque de codigo es todo lo que esta dentro de { }

//FUNCIONES
function saludar(){
    let respuesta = prompt("Hola, como estas?");
    if (respuesta == "bien") {
      alert("genial");
    } else {
      alert("ctm");
    }
}

// saludar();

//Otra forma de hacer funciones
saludar2 = function() {
  let respuesta = prompt("Hola, como estas?");
  if (respuesta == "bien") {
    alert("genial");
  } else {
    alert("ctm");
  }
}

// saludar2();

// function saludar3(){
//     alert("hola");
// }

// let saludo = saludar3();

// document.writeln(saludo);//undefined porque no nos regresa ningun dato


//RETURN
function saludar3() {
  alert("hola");
  return "saludar 3 :)"
}

// let saludo = saludar3();

// document.writeln(saludo);//saludar 3 :)


//PARAMETROS
function suma(num1, num2){
    //Si no le pones let, res se vuelve una variable global
    //y se puede usar donde sea en el scope del archivo
    //igual si le pones var, el scope de la variable se hace de todo el archivo
    let res = num1 + num2;
    document.writeln(res);
}

suma(12,32);//44
let resultado = suma(5,10);//15
document.writeln(resultado);//undefined
suma();//NaN porque num1 y num2 son Undefined

function saludazo(nombre){
    let frase = `Hola ${nombre}`;
    document.writeln(frase);
}

saludazo("hola chile")//hola chile

//console.log(res)// res is not defined


// const salu = function (nombre) {
//   let frase = `Hola ${nombre}`;
//   document.writeln(frase);
// };

// salu("gil");



//ARROW FUNCTIONS
//Si solo usa un parametro no hace falta poner parentesis
const salu = nombre => {
    let frase = `Hola ${nombre}`;
    document.writeln(frase);
};

salu("jeje")

//Si solo tenemos una expresion, no hace falta usar llaves
const flecha = (nombre) => document.writeln(`Hola ${nombre}`);

flecha("flecha");