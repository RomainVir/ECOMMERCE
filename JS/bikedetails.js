function Bikedetails() {
    console.log("Pagina cargada");
  
    let request = new XMLHttpRequest();                 //amener des infos d´un serveur sans recharger la page
    request.onreadystatechange = function () {
      console.log(`estado actual ${this.readyState}`);
  
     
      if(this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText)
      
  
  
   // IL FAUT CHANGER ICI SELON LE NOM DU FICHIER
      let htmlContent = ""
      htmlContent = `<ul><li>${response.id}</id>
      <li>${response.id}</id>
      <li>${response.firstName}</id>
      <li>${response.lastName}</id>
      <li>${response.likes}</id>`;
  
      htmlContent += "</ul>"
      let usersDiv = document.getElementById("container");
      usersDiv.innerHTML = htmlContent;
  
  //-------------------
  //Afficher les numeros de page
  
  
   
  }
  request.open("GET", `http://localhost:8000/bikedetails", true`) // on appelle en haut
    request.send();
  }
  }