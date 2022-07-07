//sqrt() - devuelve la raiz cuadrada positiva de un numero
numero = Math.sqrt(25); //5
document.write(numero + "<br>");

//cbrt() - devuelve la raiz cubica de un numero
numero = Math.cbrt(27); //3
document.write(numero + "<br>");

//max() - Devuelve el mayor de cero o mas numeros
numero = Math.max(4,1,6,12,64,244,2); //244
document.write(numero + "<br>");

//min() - devuelve el mas pequeno de cero o mas numeros
numero = Math.min(4, 1, 6, 12, 64, 244, 2); //1
document.write(numero + "<br>");

//random() - devuelve un numero pseudo-aleatorio entre 0 y 1 (1 no incluido)
numero = Math.random(); //numero entre 0 y 1
numero = Math.random() * 100; //entre 0 y 100 con decimales
numero = numero.toString();
numero = numero[0] + numero[1];
if(numero[1]=="."){
    numero = numero[0];
}
document.write(numero + "<br>"); //entre 0 y 100 sin decimales, convirtiendo a string y agarrando los dos primeros valores


//round() - devuelve el valor de un numero redondeado al numero entero mas cercano
numero = Math.random()*100;
numero = Math.round(numero);//entre 0 y 100 incluidos 0 y 100 sin tener que hacer todo el if del math.random() pasado

document.write(numero + "<br>");

//fround() - devuelve la representacion flotante de precision simple mas cercano
numero = Math.fround(9.7599999999999);
document.write(numero + "<br>");



//floor() - devuelve redondeado hacia abajo
numero = Math.random() * 100;
numero = Math.floor(4.9); //4

document.write(numero + "<br>");

numero = Math.random() * 99;
numero = Math.floor(numero + 1); //entre 1 y 99 incluidos

document.write(numero + "<br>");


//trunc() - elimina los decimales
numero = Math.round(9.5);//10
document.write(numero + "<br>");

numero = Math.trunc(9.9);//9
document.write(numero + "<br>");
