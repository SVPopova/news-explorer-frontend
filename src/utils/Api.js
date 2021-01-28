const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`); // если ошибка, отклоняем промис
};
const dateNow = new Date().toISOString().slice(0, 10);
const dateFrom = new Date(new Date().setDate(new Date().getDate() - 7))
  .toISOString()
  .slice(0, 10);

class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }
  getNews(keyWords) {
    return fetch(
      `${this.baseUrl}v2/everything?language=ru&q=${keyWords}&from=${dateFrom}&to=${dateNow}&apiKey=94dd016e85614a8e9cfa7ac35ac380c3`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    ).then(handleResponse);
  }
}
const api = new Api({
  baseUrl: "https://nomoreparties.co/news/",
});
export default api;
