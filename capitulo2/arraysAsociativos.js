//Arrays asociativos (Objetos)
let pc = {
    nombre: "GilPC",
    procesador: "Quiensabe",
    ram: "16GB",
    espacio: "1.2TB"
}

//array normal
let pc2 = ["Gil","quiensabe","16gb","1tb"];

document.writeln(pc) //[object object]
document.writeln(pc["ram"]); //16GB

let nombre = pc["nombre"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];

let frase = `<br> Mi pc: <b>${nombre}</b> <br>
            Procesador: <b>${procesador}</b> <br>
            Ram: <b>${ram}</b> <br>
            Espacio: <b>${espacio}</b>
`;

document.writeln(frase);
