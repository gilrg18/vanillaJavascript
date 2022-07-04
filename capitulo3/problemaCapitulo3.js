//Problema 1
class Celular {

  constructor(color, peso, rdp, rdc, ram) {
    this.color = color;
    this.peso = peso;
    this.rdp = rdp;
    this.rdc = rdc;
    this.ram = ram;
    this.encendido = false;
  }

  presionarBotonEncendido() {
    if (this.encendido == false) {
      alert("Celular prendido");
      this.encendido = true;
    } else {
      alert("Celular apagado");
      this.encendido = false;
    }
  }

  reiniciar(){
    if (this.encendido == true) {
      alert("Reiniciando celular");
    } else {
      alert("El celular esta apagado");
    }
  }

  tomarFotos(){
    alert(`Foto tomada con una resolucion de: ${this.rdc}`);
  }

  grabarVideo(){
    alert(`Grabando video en ${this.rdc}`);
  }

  mostrarInfo(){
    return `
    Color: <b>${this.color}</b> </br>
    Peso: <b>${this.peso}</b> </br>
    Tamano: <b>${this.rdp}</b> </br>
    Resolucion de Camara: <b>${this.rdc}</b> </br>
    Resolucion de Video: <b>${this.rdc}</b> </br>
    Memoria Ram: <b>${this.ram}</b> </br>
    `;
  }

}


celular1 = new Celular("rojo", "150g","5'","hd","1GB");

celular2 = new Celular("negro", "155g", "5.4'", "Full hd", "2GB");

celular3 = new Celular("blanco", "145g", "5.9'", "Full hd", "2GB");

// celular1.presionarBotonEncendido();
// celular1.tomarFotos();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

document.write(`${celular1.mostrarInfo()} <br>
${celular2.mostrarInfo()} <br>
${celular3.mostrarInfo()} <br>
`);



//Problema 2
class CelularAltaGama extends Celular{
    constructor(color,peso,rdp, rdc, ram, rdce){
        super(color,peso,rdp,rdc,ram);
        this.resolucionDeCamaraExtra = rdce;
    }

    grabarVideoLento(){
        alert("Estas grabando en camara lenta");
    }

    reconocimientoFacial(){
        alert("Reconocimiento facial iniciado");
    }

    infoAltaGama(){
        return this.mostrarInfo() + `Resolucion de camara trasera: ${this.resolucionDeCamaraExtra} <br>`;
    }
}

celular4 = new CelularAltaGama("rojo", "130g", "5.2'", "4K","3GB","FULL HD");
celular5 =new CelularAltaGama("negro", "150g", "5.2'", "4K", "3GB", "HD");

document.write(`${celular4.infoAltaGama()} <br>
${celular5.infoAltaGama()} <br>`)