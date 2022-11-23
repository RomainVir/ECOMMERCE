function openAccount() {
  const user = "romain@gmail.com";
  const password = "Romano";

  let usuario = document.getElementById("user").value;
  let pass = document.getElementById("password").value;

  if (user === usuario && password === pass) {
    window.alert("Bienvenido a tu cuenta Romain");
  } else {
    const elementos = document.getElementsByClassName("error");
    for (let i = 0; i < elementos.length; i++) {
      if (elementos[i].id == "error") {
        elementos[i].style.display = "flex";
      }
    }
  }
}
