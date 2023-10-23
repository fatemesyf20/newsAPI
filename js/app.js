//class
const ui = new UI();
const newsApi = new News();
//event listeners
eventListeners();
function eventListeners() {
  //acces to submit button
  const submitBtn = document
    .getElementById("submitBtn")
    .addEventListener("click", loadData);
}
//functions
function loadData() {
  //acces to value of fields
  const newsName = document.querySelector("#news-name").value;
  const country = document.querySelector("#country").value;
  const category = document.querySelector("#category").value;

  if (newsName === "" && country === "" && category === "") {
    ui.printMassage("please atleast enter 1 filed", "alert-danger");
  } else {
    newsApi.queryApi(newsName, country, category).then((news) => {
      const newsArticles = news.apiUrl.articles;
      if (newsArticles.length > 0) {
        ui.showNews(newsArticles);
      } else {
        ui.printMassage(
          "There is no news with your filtering!",
          "alert-warning"
        );
      }
    });
  }
}
