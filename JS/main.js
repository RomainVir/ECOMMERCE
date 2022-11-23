function bienvenido() {
  console.log("Hola");

  let testjs = document.getElementById("testjs");
  testjs.innerHTML = "<h1>Here are the best offers for November</h1>";
}

/*function addToCart() {
  let contador = document.getElementById("contador");

  contador.innerHTML = "7";*/

function addToCart() {
  let contador = document.getElementById("contador");
  let cantidad = parseInt(contador.innerHTML); //parseInt pour transformer un string en number
  contador.innerHTML = `${++cantidad}`;
}

function removeCart() {
  let contador = document.getElementById("contador");
  let cantidad = parseInt(contador.innerHTML); //parseInt pour transformer un string en number
  contador.innerHTML = `${--cantidad}`;
}
