
function init(page) {
    console.log("Pagina cargada");
  
    let request = new XMLHttpRequest();                 //amener des infos d´un serveur sans recharger la page
    request.onreadystatechange = function () {
      console.log(`estado actual ${this.readyState}`);
  
      if(this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText)
      const data = response.data; // IL FAUT CHANGER ICI SELON LE NOM DU FICHIER
      let htmlContent = "";
  
      for(let i = 0; i < data.length; i++){
          htmlContent += `<li><a href ="posts.html">, <img src = ${data[i].picture} width = 80px>, ${data[i].id}, ${data[i].likes}</li>`; // il faut remettre le meme nom que la constante
      }
   htmlContent += "</ul>"
  
  let usersDiv = document.getElementById("user");
  usersDiv.innerHTML = htmlContent;
  //-------------------
  //Afficher les numeros de page

  let afficherPage = "";

  for( let i = 0; i < response.total/response.limit; i++){
    afficherPage += `<button onclick="init(${i})"href ="#">${i+1}</button>     `
  }

  let page = document.getElementById("page")
  page.innerHTML = afficherPage
     
}
   
}
  request.open("GET", `https://dummyapi.io/data/v1/post?limit=10&page=${page}", true`) // on appelle en haut
    request.setRequestHeader("app-id","63768ca358fe3b7c1b6f1d91") //id de nuestro account y autorisation de prendre les données
    request.send();
  }