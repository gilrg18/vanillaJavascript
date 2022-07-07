//Implementar calculadora
class Calculadora{
    constructor(){

    }
    sumar(num1, num2){
        return parseInt(num1) + parseInt(num2);
        //parseInt porque vamos a pedir los datos por un prompt
    };
    restar(num1, num2){
        return parseInt(num1) - parseInt(num2);
    };
    dividir (num1, num2) {
        return parseInt(num1) / parseInt(num2);
    };
    multiplicar (num1, num2) {
        return parseInt(num1) * parseInt(num2);
    };

    potenciar(num,exp){
        let numero = num;
        for(let i = 1; i < exp; i++){
            numero = numero * num;
        }
        return numero;
        //return num**exp;
    }

    raizCuadrada(num){
        return Math.sqrt(num);
    }

    raizCubica(num){
        return Math.cbrt(num);
    }
}

const calculadora = new Calculadora();

alert("Que operacion quieres?");
operacion = prompt("1: Suma, 2: Resta, 3: Division, 4: Multiplicacion, 5:potenciacion, 6: Raiz cuadrada, 7: Raiz Cubica");

if (operacion == 1) {
  let numero1 = prompt("primer numero para sumar");
  let numero2 = prompt("segundo numero para sumar");
  resultado = calculadora.sumar(numero1, numero2);
  alert(`Resultado: ${resultado}`);
} else if (operacion == 2) {
  let numero1 = prompt("primer numero para restar");
  let numero2 = prompt("segundo numero para restar");
  resultado = calculadora.restar(numero1, numero2);
  alert(`Resultado: ${resultado}`);
} else if (operacion == 3) {
  let numero1 = prompt("primer numero para dividir");
  let numero2 = prompt("segundo numero para dividir");
  resultado = calculadora.dividir(numero1, numero2);
  alert(`Resultado: ${resultado}`);
} else if (operacion == 4) {
  let numero1 = prompt("primer numero para multiplicar");
  let numero2 = prompt("segundo numero para multiplicar");
  resultado = calculadora.multiplicar(numero1, numero2);
  alert(`Resultado: ${resultado}`);
} else if (operacion == 5) {
  let numero1 = prompt("numero");
  let numero2 = prompt("exponente");
  resultado = calculadora.potenciar(numero1, numero2);
  alert(`Resultado: ${resultado}`);
} else if (operacion == 6) {
  let numero1 = prompt("Raiz cuadrada");
  resultado = calculadora.raizCuadrada(numero1);
  alert(`Resultado: ${resultado}`);
} else if (operacion == 7) {
  let numero1 = prompt("Raiz cubica");
  resultado = calculadora.raizCubica(numero1);
  alert(`Resultado: ${resultado}`);
} else {
  alert("No existe");
}