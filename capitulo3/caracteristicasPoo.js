//ABSTRACCION
//Tener solo las caracteristicas fundamentales un objeto (como un objeto resumido)

//MODULARIDAD
//Separar un problema en pedacitos para resolverlo pedacito por pedacito, mas efectivo


//ENCAPSULAMIENTO
//Datos privados para que la informacion no sea de tan facil acceso


//POLIMORFISMO
//Como un objeto se comporta diferente utilizando el mismo metodo.
//Ejemplo: un perro camina diferente a un gato.


class Animal {
  constructor(especie, edad, color) {
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    this.informacion = `Soy ${this.especie}, tengo ${this.edad} anios y soy de color ${this.color}.`;
  }
  verInformacion() {
    document.write(this.informacion + "<br>");
  };
  //polimorfismo, objetos se comportan distinto porque tienen propiedades diferentes
//   ladrar(){
//     if(this.especie=="perro"){
//         document.write("wuau <br>");
//     }else{
//         document.write("no puede ladrar, ya que es un "+ this.especie+ "<br>");
//     }
//   }
}

//HERENCIA - extends

class Perro extends Animal {
    constructor(especie, edad, color, raza){
        super(especie, edad, color); //constructor de la clase padre
        this.raza = raza;
    }
    ladrar(){
        alert("guau");
    }
}

//no se puede tener un objeto con el mismo nombre de la clase
//const perro = new perro(..blalala);
const nuevoPerro = new Perro("perro", 5, "cafe", "shi tzu");
const gato = new Animal("gato", 2, "negro");
const pajaro = new Animal("pajaro", 1, "verde");

nuevoPerro.verInformacion();
gato.verInformacion();
pajaro.verInformacion();

nuevoPerro.ladrar();