// fonction pour voir le detail du produit en ofertas
function Ofertas(){
    let userId = new URLSearchParams(window.location.search).get("id");
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () 
      console.log(`estado actual ${this.readyState}`);
  
      if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText);
        let usersDiv = document.getElementById("ofertas");
        let htmlContent ="";
      for (i= 0; i < response.length; i++ )  {
        if(userId === response[i].nombre){
            htmlContent+=`<div class="cards"><img src="${response.picture}" alt="velo2" width="400px">
            <h3>$${response.nombre[i]}</h3>
            <h4>${response.detalle[i]}</h4>
            <div class="rating">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <button>Add to basket</button>
          </div>`
        }
        }
        usersDiv.innerHTML = htmlContent;
        }
      
      request.open("GET", "http://localhost:8000/detalleproducto?id=${//??}", true)
      
      request.send();

        }