let dinero1 = prompt("1.Cuanto traes?");
// let dinero2 = prompt("2.Cuanto traes?");
// let dinero3 = prompt("3.Cuanto traes?");

if (dinero1 >= 0.6 && dinero1 < 1) {
  alert("1.Compra helado de agua");
  alert(`y te sobran ${dinero1 -.6}`); // 0
  alert("dinero " + dinero1 -.6); //nan no se le puede restar a string dinero1
  //dinero1 = parseInt(dinero1);
  //se soluciona el nan poniendo parentesis porque
  //la concatenacion convierte la variable en string
  alert("dinero " + (dinero1 - 0.6)); //0
} else if (dinero1 >= 1 && dinero1 < 1.6) {
  alert("1.Compra helado de crema");
    alert(`y te sobran ${dinero1 - 1}`);

} else if (dinero1 >= 1.6 && dinero1 < 1.7) {
  alert("1.Compra helado de heladix");
    alert(`y te sobran ${dinero1 - 1.6}`);

} else if (dinero1 >= 1.7 && dinero1 < 1.8) {
  alert("1.Compra helado de heladovich");
    alert(`y te sobran ${dinero1 - 1.7}`);

} else if (dinero1 >= 1.8 && dinero1 < 2.9) {
  alert("1.Compra helado de helardo");
    alert(`y te sobran ${dinero1 - 1.8}`);

} else if (dinero1 >= 2.9){
  alert("1.Compra helado con confites o pote de 1/4kg");
      alert(`y te sobran ${dinero1 - 2.9}`);

}else{
    alert("1.pobre lol");
}

// if (dinero2 >= 0.6 && dinero2 < 1) {
//   alert("2.Compra helado de agua");
// } else if (dinero2 >= 1 && dinero2 < 1.6) {
//   alert("2.Compra helado de crema");
// } else if (dinero2 >= 1.6 && dinero2 < 1.7) {
//   alert("2.Compra helado de heladix");
// } else if (dinero2 >= 1.7 && dinero2 < 1.8) {
//   alert("2.Compra helado de heladovich");
// } else if (dinero2 >= 1.8 && dinero2 < 2.9) {
//   alert("2.Compra helado de helardo");
// } else if (dinero2 >= 2.9) {
//   alert("2.Compra helado con confites o pote de 1/4kg");
// } else {
//   alert("2.pobre lol");
// }

// if (dinero3 >= 0.6 && dinero3 < 1) {
//   alert("3.Compra helado de agua");
// } else if (dinero3 >= 1 && dinero3 < 1.6) {
//   alert("3.Compra helado de crema");
// } else if (dinero3 >= 1.6 && dinero3 < 1.7) {
//   alert("3.Compra helado de heladix");
// } else if (dinero3 >= 1.7 && dinero3 < 1.8) {
//   alert("3.Compra helado de heladovich");
// } else if (dinero3 >= 1.8 && dinero3 < 2.9) {
//   alert("3.Compra helado de helardo");
// } else if (dinero3 >= 2.9) {
//   alert("3.Compra helado con confites o pote de 1/4kg");
// } else {
//   alert("3.pobre lol");
// }