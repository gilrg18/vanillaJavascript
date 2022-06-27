//Operadores de Asignacion
let numero = 10;
numero += 5;
numero -= 5;
numero *= 5;
numero /= 5;
numero %= 6; //residuo 10/6 = 4
numero **=5; //exponente
document.write(numero);

//Operadores Aritmeticos
let num1 = 10;
let num2 = 5;
let res = num1 + num2;
res = num1--; //asi primero se asigna y luego se resta
//entonces res = 10;
//alert(res)// 10;
//alert(num1);// 9

num2--;
res = num2;
//alert(res); //4

res = num1 / num2;

res = num2**2; //16
console.log(res)

num2++; 4+1
res = num2; //5
console.log(res);

res = 10%5 //0
console.log(res);

res = 10-5;

res = -res;
//etc etc..