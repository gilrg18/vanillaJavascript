let cantidad = prompt("Cuantos alumnnos son?");
let alumnosTotales =[];

for(let i = 0; i<cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)), 0];
}

const tomarAsistencia = (nombre, posicion) =>{
    let presencia = prompt(nombre);
    if(presencia == "p" || presencia == "P"){
        alumnosTotales[posicion][1]++;
    }
}

//tomar asistencia por 30 dias seguidos
for(let i = 0; i<30; i++){
    for (alumno in alumnosTotales){
        tomarAsistencia(alumnosTotales[alumno][0], alumno)//nombre y posicion
    }
}


for(alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    _______Asistencias: ${alumnosTotales[alumno][1]} <br>
    _______Faltas: ${30 - parseInt(alumnosTotales[alumno][1])}`;
    if(30-alumnosTotales[alumno][1] > 18){
        //18 limite de faltas
        resultado+= "<b style='color:red'> REPROBADO POR FALTAS XD </b> <br><br>";
    }else{
        resultado+="<br><br>"
    }
    document.writeln(resultado);
}
//gil ,0 asistencias
//miguel, 2 asistencias
//gol, 1 asistencia