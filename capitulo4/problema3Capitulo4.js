let materias = {
  //el primer nombre es el profesor
  fisica: ["Perez", "pedro", "pepito", "cofla", "maria"],
  programacion: ["Gil", "pedro", "juan", "pepito"],
  logica: ["Dalto", "pedro", "juan", "pepito", "cofla", "maria"],
  quimica: ["Maik", "pedro", "juan", "pepito", "cofla", "maria"],
};

const inscribir = (alumno,materia) =>{
  personas = materias[materia];
  if(personas.length >= 21){
    document.write(`Lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> ya estan llenas <br>`);
  }else{
      personas.push(alumno); //meter nuevo alumno
      if (materia == "fisica") {
        materias = {
          fisica: personas,
          programacion: materias["programacion"],
          logica: materias["logica"],
          quimica: materias["quimica"],
        };
      } else if (materia == "programacion") {
        materias = {
          fisica: materias["fisica"],
          programacion: personas,
          logica: materias["logica"],
          quimica: materias["quimica"],
        };
      }else if (materia == "logica") {
        materias = {
          fisica: materias["fisica"],
          programacion: materias['programacion'],
          logica: personas,
          quimica: materias["quimica"],
        };
      }else if (materia == "quimica") {
        materias = {
          fisica: materias["fisica"],
          programacion: materias["programacion"],
          logica: materias["logica"],
          quimica: personas,
        };
      }
    document.write(`Alumno ${alumno} inscrito con exito a ${materia} <br>`)
    document.write(`personas en ${materia}: ${materias[materia]} <br>`);
    }
  }


document.write(materias['fisica']+`<br>`);
inscribir("gil","fisica");
inscribir("hector", "fisica");
inscribir("dani", "fisica");
inscribir("alan", "fisica");
inscribir("gil", "fisica");
inscribir("hector", "fisica");
inscribir("dani", "fisica");
inscribir("alan", "fisica");
inscribir("gil", "fisica");
inscribir("hector", "fisica");
inscribir("dani", "fisica");
inscribir("alan", "fisica");
inscribir("gil", "fisica");
inscribir("hector", "fisica");
inscribir("dani", "fisica");
inscribir("alan", "fisica");
inscribir("gil", "fisica");
inscribir("hector", "fisica");
inscribir("dani", "fisica");
inscribir("alan", "fisica");
inscribir("gil", "fisica");
inscribir("hector", "fisica");
inscribir("dani", "fisica");
inscribir("alan", "fisica");
inscribir("gil", "quimica");
inscribir("hector", "quimica");
inscribir("dani", "quimica");
inscribir("alan", "quimica");
inscribir("gil", "quimica");
inscribir("hector", "quimica");
inscribir("dani", "quimica");
inscribir("alan", "quimica");
inscribir("gil", "quimica");
inscribir("hector", "quimica");
inscribir("dani", "quimica");
inscribir("alan", "quimica");



console.log(materias);