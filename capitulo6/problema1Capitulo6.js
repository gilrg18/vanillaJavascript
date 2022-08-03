const contenedor = document.querySelector(".flex-container");
//Cambiar el value de comprar a COMPRAR
// const boton = document.querySelector(".send-button");
// boton.value = boton.value.toUpperCase();

function crearLlave(nombre,modelo,precio){
    img = "<img class ='llave-img' src='llave.png'>"
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3 id='${modelo}'>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b><p>`;
    return [img, nombre,modelo,precio];
}

//para cambiar el value del input type hidden
// const changeHidden = (number) => {
//     document.querySelector(".key-data").value = number;
// }

let documentFragment = document.createDocumentFragment();

for (let index = 0; index < 20; index++) {
    let precioRandom = Math.round(Math.random()*10+30);//numero entre 30 y 40
    let  modeloRandom = Math.round(Math.random() * 10000);
    let llave = crearLlave(`Llave ${index}`, `Modelo ${modeloRandom}` ,`${precioRandom}`);
    let div = document.createElement("DIV");
    div.addEventListener("click", ()=> {
         document.querySelector(".key-data").value = modeloRandom;
         console.log(`Seleccionado: ${modeloRandom}`)
    });
    div.tabIndex = index; //navegar usando TAB
    div.classList.add(`item-${index}`,'flex-item');
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);