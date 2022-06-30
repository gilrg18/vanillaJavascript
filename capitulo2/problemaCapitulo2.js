let free = true;

const validarCliente = (time) =>{
    let edad = prompt("Edad?");
    if(edad>18){
        if(time >= 2 && time <7 && free){
            alert("Pasale gratis porque eres el primero en llegar despues de las 2am");
            free = false;
        }else{
            alert(`Son las ${time}, serian 200 pesos.`);
        }
    }else{
        alert("Menor de edad, ctm :)");
    }
}

validarCliente(3);
validarCliente(5);