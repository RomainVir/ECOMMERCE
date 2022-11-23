// fonction pour voir le detail du produit en ofertas
function Detalleproducto(){
    let userId = new URLSearchParams(window.location.search).get("id");
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      console.log(`estado actual ${this.readyState}`);
  
      if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText);
        let usersDiv = document.getElementById("detalles");
        let htmlContent ="";
            htmlContent+=`<div class="cards"><img src="${response.picture}" width="400px">
            <h3>$${response.nombre}</h3>
            <h4>${response.detalle}</h4>
           
            <button>Add to basket</button>
          </div>`
        
        usersDiv.innerHTML = htmlContent;
        }
      }
      
      request.open("GET", `http://localhost:8000/producto/${userId}`, true)
      
      request.send();

        
      }