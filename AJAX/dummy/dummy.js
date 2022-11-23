function init() {
    console.log("Pagina cargada");
  
    let request = new XMLHttpRequest();                 //amener des infos d´un serveur sans recharger la page
    request.onreadystatechange = function () {
      console.log(`estado actual ${this.readyState}`);
  
      if(this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText)
      const user = response.data; // IL FAUT CHANGER ICI SELON LE NOM DU FICHIER
      let htmlContent = "";
  
      for(let i = 0; i < user.length; i++){
          htmlContent += `<li>${user[i].firstName}, ${user[i].lastName}</li>`;
      }
      
  // htmlContent += "</ul>"
  
      let usersDiv = document.getElementById("user");
      usersDiv.innerHTML = htmlContent;
      }
    }
  
    request.open("GET", "https://dummyapi.io/data/v1/user?limit=10", true)
    request.setRequestHeader("app-id","63768ca358fe3b7c1b6f1d91") //id de nuestro account y autorisation de prendre les données
    request.send();
  }
  