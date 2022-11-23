function init() {
  console.log("Pagina cargada");

  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    console.log(`estado actual ${this.readyState}`);

    if(this.readyState == 4 && this.status == 200) {
    const response = JSON.parse(this.responseText)
    const entries = response.entries;
    let htmlContent = "";

    for(let i = 0; i < entries.length; i++){
        htmlContent += `<li>${entries[i].Category}, ${entries[i].Description}</li>`;
    }
    
// htmlContent += "</ul>"

    let entriesDiv = document.getElementById("entries");
    entriesDiv.innerHTML = htmlContent;
    }
  }

  request.open("GET", "https://api.publicapis.org/entries", true)
  request.send();
}

