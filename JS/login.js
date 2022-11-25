function openAccount() {

  let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      console.log(`estado actual ${this.readyState}`);
 let htmlContent=""

      if (this.status == 200) {
        htmlContent = window.alert("CONNECTADO")
        
        }
        else if (this.status == 401){
          htmlContent = alert("ERROR")
        }
      }
     let loginEmail = document.getElementById("email").value;
 let loginPassword = document.getElementById("password").value;
 let body = {email: loginEmail, password: loginPassword}
        request.open("POST", `http://localhost:8000/login`, true)
        request.setRequestHeader("Content-Type", "application/json");
      
        request.send(JSON.stringify(body)); 
    }
 

        // fonction pour le register dans mysql

      function register() {
        let registerEmail = document.getElementById("Email").value;
        let registerPassword = document.getElementById("Password").value;
        let registerName = document.getElementById("Name").value;
        let registerSurname = document.getElementById("Surname").value;
        let request = new XMLHttpRequest();
          request.onreadystatechange = function () {
            console.log(`estado actual ${this.readyState}`);
       
      
            if(this.readyState ==4 ) { 
      
            
            if (this.status == 200) {
               alert("REGISTRADO")
              
              }
              else if (this.status == 400){
              alert("ERROR DE REGISTRO")
              }
            }
            
           
          }
          let body = {email: registerEmail, password: registerPassword, name:registerName, surname:registerSurname}
              request.open("POST", `http://localhost:8000/register`, true)
              request.setRequestHeader("Content-Type", "application/json");
            
              request.send(JSON.stringify(body));
      
            }
            

            /*
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
} */
// ça c´etait sans l´api