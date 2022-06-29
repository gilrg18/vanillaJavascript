//while
let numero = 0;

//primero pregunta y luego ejecuta
// while(numero<10){
//     document.write(numero + "<br>");
//     numero++;
// }

//do while
//primero ejecuta y luego pregunta
// do{
//     document.write(numero + "<br>");
//     numero++;
// }while(numero<10)

//break
//cuando se ejecuta el break,se acaba el loop
// while(numero<1000){
//     numero++;
//     document.write(numero + "<br>");
//     if(numero == 10){
//         break;
//     }
// }


//for - bucle determinado - se sabe cuantos loops va a dar
//while - bucle indeterminado, no se sabe cuantas vueltas va a dar
//let i = 20;
// let i = 30; //error i ya fue declarada.
//declaracion e inicializacion; condicion; aumento o decremento; 
for(let i = 0; i < 20; i++){  //i de increment
    //continue para saltarse el loop
    if(i==15) continue;  
    document.write(i + "<br>");
}

// for (let i = 6; i >=0; i--) {
//   document.write(i + "<br>");
// }

// let i = 0
// for (i; i < 6; i++) {
//   document.write(i + "<br>");
// }
