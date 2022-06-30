class animal {
    constructor(especie,edad,color){
        //this es el objeto
        //this.especie es la propiedad del objeto
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy ${this.especie}, tengo ${this.edad} anios y soy de color ${this.color}.`;
    }
    //funcion dentro de una clase es METODO, fuera de una clase es FUNCION
     verInformacion = () => {
        document.write(this.informacion + "<br>");
    }
}

//const perro = new animal(); //animal {especie: undefined, edad: undefined, color: undefined}
const perro = new animal("perro", 5, "cafe");
const gato = new animal("gato", 2, "negro");
const pajaro = new animal("pajaro", 1, "verde");
//document.write(perro); //object Object
console.log(perro); //animal {especie: 'perro', edad: 5, color: 'rojo'}
// document.write(perro.informacion + "<br>");
// document.write(gato.informacion + "<br>");
// document.write(pajaro.informacion + "<br>");
//perro = new animal("perro", 5, "rojo"); //error assignment to constant variable
console.log(perro);

perro.verInformacion();
gato.verInformacion();
pajaro.verInformacion();