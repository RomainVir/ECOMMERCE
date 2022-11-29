function BestProducts() {
    console.log("Pagina cargada");
  
    let request = new XMLHttpRequest();                 //amener des infos d´un serveur sans recharger la page
    request.onreadystatechange = function () {
      console.log(`estado actual ${this.readyState}`);
  
      if(this.readyState == 4 && this.status == 200) {
      const destacados = JSON.parse(this.responseText)
       // IL FAUT CHANGER ICI SELON LE NOM DU FICHIER
      let htmlContent = "";
  
      let usersDiv = document.getElementById("destacados");
      

      for(let i = 0; i < destacados.length; i++){
        
        console.log(i);
          htmlContent += `
      <div class="container-velos">
        <div class="cards">
        <img src=${destacados[i].imagen} alt="velo1" width="400px">
        <h3>${destacados[i].nombre}</h3>
        <h4>${destacados[i].precio}</h4>
        <div class="rating">
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
          <span>★</span>
        </div>
      
      <button>Add to basket</button>
       <a href="/HTML/Detalleproducto.html?id=${destacados[i].id}">Details</a> 
     
      </div>`
       
      }
      usersDiv.innerHTML = htmlContent;
    }
    }
    request.open("GET", "http://localhost:8000/specialproducts", true)
    
    request.send();
  }
