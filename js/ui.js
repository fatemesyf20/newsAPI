class UI {
  constructor() {
    this.result = document.getElementById("result");
  }
  //create methode print massage
  printMassage(massage, className) {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(massage));
    div.classList.add("alert", "text-center", className);
    document.querySelector("#search-news").appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 2500);
  }

  //create methode show news in html
  showNews(news) {
    news.forEach((newsInfo) => {
      this.result.innerHTML += `
        <div class="col-md-4 mb-4"> 
      <div class="card" ">
      
      <div class="card-body">
        <h5 class="card-title"> ${newsInfo.title.split("-", 1)}</h5>
        <p class="card-text">${newsInfo.description}</p>
        <span class="badge badge-primary"> Source: ${
          newsInfo.source.name
        } </span>
        <span class="badge badge-primary"> Date & time: ${
          newsInfo.publishedAt
        } </span>
        <a href="${
          newsInfo.url
        }" class="btn btn-primary btn-block">Complate news</a>
      </div>
    </div>
    </div>
        `;
    });
  }
}
