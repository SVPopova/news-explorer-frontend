const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`); // если ошибка, отклоняем промис
};

class MainApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }
  getMe(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then(handleResponse)
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }
  getSavedArticles() {
    return fetch(`${this.baseUrl}/articles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then(handleResponse)
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }
  saveNews(data, keyword) {
    return fetch(`${this.baseUrl}/articles`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        keyword: keyword,
        title: data.title,
        text: data.description,
        date: data.publishedAt,
        source: data.source.name,
        link: data.url,
        image: data.urlToImage,
      }),
    })
      .then(handleResponse)
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }
  deleteNews(idArticle) {
    return fetch(`${this.baseUrl}/articles/${idArticle}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    })
      .then(handleResponse)
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      });
  }
}
const mainApi = new MainApi({
  baseUrl: "http://api.svpopova.students.nomoredomains.rocks",
});
export default mainApi;
