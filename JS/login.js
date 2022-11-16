function openAccount() {
  const user = document.getElementById("user").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error").value;

  if (user === "romain@gmail.com" && password === "Romano") {
    window.alert("Bienvenido a tu cuenta Romain");
  } else {
    window.alert(get("error"));
  }
}
