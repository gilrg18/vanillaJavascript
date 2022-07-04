
class Animal {
  constructor(especie, edad, color) {
    this.especie = especie;
    this.edad = edad;
    this.color = color;
    this.informacion = `Soy ${this.especie}, tengo ${this.edad} anios y soy de color ${this.color}.`;
  }
  verInformacion() {
    document.write(this.informacion + "<br>");
  }
}

//HERENCIA - extends

class Perro extends Animal {
  constructor(especie, edad, color, raza) {
    super(especie, edad, color); //constructor de la clase padre
    this.raza = null;
  }
  //STATIC
  static ladrar() {
    alert("guau");
  }

  //GETTERS Y SETTERS
  //Obtener valor y Modificar/definir valor
  set setRaza(newRaza){
    this.raza= newRaza;
  }

  get getRaza(){
    return this.raza;
  }
}


const nuevoPerro = new Perro("perro", 5, "cafe", "shi tzu");
const gato = new Animal("gato", 2, "negro");
const pajaro = new Animal("pajaro", 1, "verde");

nuevoPerro.verInformacion();
gato.verInformacion();
pajaro.verInformacion();

// nuevoPerro.ladrar(); error porque ladrar es static

//STATIC
//Puedes utilizar los metodos sin instanciar la clase
Perro.ladrar();
//nuevoPerro.modificarRaza(); //Not a function porque los setters y getters funcionan como PROPIEDADES

//Setter:
//Metodo que se utiliza como propiedad
nuevoPerro.setRaza = "labrador";
//Getter
document.write(nuevoPerro.getRaza);

//Los getters y setters se utilizan para acceder a propiedades privadas
//o en javascript a datos encapsulados
