//Uso de `` y ${}
let frase1 = "Gilberto";

let frase3 = `Soy ${frase1}, buenas tardes`;
console.log(frase3);

// let frase4 = "Soy " + frase1 + ", 
// buenas tardes"; //NO FUNCIONA

// let frase4b = 'Soy " + frase1 + ", 
// buenas tardes'; //NO FUNCIONA

let frase5 = `Soy ${frase1}, 
buenas tardes`; //Si funciona :)


//html
let frase = `<div>
<h1> Que tal </h1/
</div>`;

document.writeln(frase);

let x = "mi nombre es 'gil' buenas";
document.writeln(x);

//no funciona
// let x = "mi nombre es "gil" buenas";

let y = 'mi nombre es "gil" buenas';
document.writeln(y);