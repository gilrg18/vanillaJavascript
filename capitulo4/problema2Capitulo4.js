const obtenerInformacion = (materia)=>{
    materias = {
      fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
      programacion: ["Gil", "pedro", "juan", "pepito"],
      logica: ["Dalto", "pedro", "juan", "pepito", "cofla", "maria"],
      quimica: ["Maik", "pedro", "juan", "pepito", "cofla", "maria"],
    };
    if(materias[materia] !== undefined){
        return [materias[materia], materia, materias];
    }else{
        return materias;
    }
}

const mostrarInfo = (materia)=>{
    let informacion = obtenerInformacion(materia);
    if(informacion !== false){
        let profesor = informacion[0][0];//el primer elemento es el profe
        let alumnos = informacion[0];
        alumnos.shift();// para eliminar el primer elemento
        document.write(`El profesor de <b>${informacion[1]}</b> es: <b style="color:red">${profesor}</b><br>
        Los alumnos son <b style="color:blue">${alumnos}</b><br>
        `)
    }
}

const cantidadDeClases = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes =[];
    let cantidadTotal = 0;
    for(info in informacion){//info es la materia (fisica,logica,etc)
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(" " + info );
        }
    }
    return `<b style ="color:blue">${alumno}</b> esta en <b>${cantidadTotal} clases</b><br>
    Esta cursando las clases: <b style="color:green">${clasesPresentes}</b><br><br>
    `;
}

mostrarInfo("fisica");
mostrarInfo("programacion")
mostrarInfo("logica");
mostrarInfo("quimica");


document.write(cantidadDeClases("cofla"));
document.write(cantidadDeClases("asd"));
document.write(cantidadDeClases("maria"));
document.write(cantidadDeClases("pedro"));