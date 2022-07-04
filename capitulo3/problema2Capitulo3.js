class App {
  constructor(descargas, puntuacion, peso) {
    this.descargas = descargas;
    this.puntuacion = puntuacion;
    this.peso = peso;
    this.iniciada = false;
    this.instalada = false;
  }
  abrir() {
    if (this.iniciada == false) {
      this.iniciada = true;
      alert("App Iniciada");
    }
  }

  cerrar() {
    if (this.iniciada == true) {
      this.iniciada = false;
      alert("App Cerrada");
    }
  }

  instalar() {
    if (this.instalada == false) {
      this.instalada = true;
      alert("App instalada correctamente");
    }
  }

  desinstalar() {
    if (this.instalada == true) {
      this.instalada = false;
      alert("App desinstalada correctamente");
    }
  }

  abrir() {
    if (this.iniciada == false && this.instalada == true) {
      this.iniciada = true;
      alert("App Iniciada");
    }
  }

  cerrar() {
    if (this.iniciada == true && this.instalada == true) {
      this.iniciada = false;
      alert("App Cerrada");
    }
  }

  appInfo(){
    return `Descargas: <b>${this.descargas}</b> </br>
    Puntuacion: <b>${this.puntuacion}</b> </br>
    Peso: <b>${this.peso}</b> </br>`;
  }
}

app = new App("16.000", "5 estrellas", "900mb");
app2 = new App("3", "4 estrellas", "2GB");
app3 = new App("50.000", "1 estrellas", "100mb");
app4 = new App("123.000", "2 estrellas", "500mb");
app5 = new App("500", "3 estrellas", "700mb");
app6 = new App("1000", "5 estrellas", "1GB");
app7 = new App("9000", "4 estrellas", "200mb");

// app.instalar();
// app.desinstalar();
// app.abrir();
// app.cerrar();
document.write(`
${app.appInfo()} <br>
${app2.appInfo()} <br>
${app3.appInfo()} <br>
${app4.appInfo()} <br>
${app5.appInfo()} <br>
${app6.appInfo()} <br>
${app7.appInfo()} <br>
`);