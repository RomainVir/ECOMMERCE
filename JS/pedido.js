function enviarPedido() {
        const producto1 = {nombre: "mardi", cantidad: 3, precio: 30050};
        
     //const lista = [producto1, producto2, producto3];
     /* for (const p of lista) {
        total += p.cantidad * p.precio; // pour faire le total
      }
*/
        const http = new XMLHttpRequest();
        http.onreadystatechange == function () {
          if (this.readyState == 4 && this.status == 200) {
            //mostrar mensaje de compra realizada
            alert("Compra realizada");
          } else if (this.readyState == 4 && this.status !=200) {
            //mostrar mensaje de compra no realizada
            alert("No realizado, revisa si tienes dinero en tu cuenta");
          }
        }
    
        http.open("POST", "http://localhost:8000/pedido");
        http.setRequestHeader("Content-Type", "application/json");
        http.send(JSON.stringify(producto1));
      }