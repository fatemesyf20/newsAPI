class News {
  //create quaryApi structure
  async queryApi(newsName, country, category) {
    const apiKey = "apiKey=10ebf6f521dd4a3f9da6b9a63657dd8d";
    let url = "https://newsapi.org/v2/";

    if (country !== "" || category !== "") {
      url += "top-headlines?";
      if (country !== "") {
        url += `country=${country}&`;
      }
      if (category !== "") {
        url += `category=${category}&`;
      }
    } else {
      url += "everything?";
      if (newsName !== "") {
        url += `q=${newsName}&`;
      }
    }
    url += apiKey;
    const newUrl = await fetch(url);
    const apiUrl = await newUrl.json();
    return {
      apiUrl,
    };
  }
}
