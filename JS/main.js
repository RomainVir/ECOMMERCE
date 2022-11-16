function bienvenido() {
  console.log("Hola");

  let testjs = document.getElementById("testjs");
  testjs.innerHTML = "je change le texte";
}

/*function addToCart() {
  let contador = document.getElementById("contador");

  contador.innerHTML = "7";*/

function addToCart() {
  let contador = document.getElementById("contador");
  let cantidad = parseInt(contador.innerHTML); //parseInt pour transformer un string en number
  contador.innerHTML = `${++cantidad}`;
}
