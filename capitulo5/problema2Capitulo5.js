//30minutos cosas de la casa
//100 trabajos
//10 descanso
//100 estudiar
//240 trabajo

let trabajo = "240 minutos de trabajo";
let estudio = "100 minutos de estudio";
let tp = "100 minutos de trabajos practicos";
let homework="30 minutos de cosas de la casa";
let descanso = "10 minutos de descanso"

console.log("TAREAS");

for(var i = 0; i<14; i++){
    if(i==0){
        console.group("Semana 1");
    }
    console.groupCollapsed(`Dia ${i + 1}`);
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(tp);
    console.log(homework);
    console.groupEnd();
    if(i==6){
        console.groupEnd();
        console.group("Semana 2");
    }
}

console.groupEnd();