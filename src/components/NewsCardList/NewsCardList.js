import React from "react";
import { Route, Switch } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList(props) {
  const elements = document.querySelectorAll(".element");
  const [rowArticle, setRowArticle] = React.useState(3);

  function handleAddArticles() {
    setRowArticle(rowArticle + 3);
  }
  return (
    <section className={props.isSuccess ? "news news_active" : "news"}>
      {props.children}
      <div className="elements">
        {props.isSuccess
          ? props.cards
              .slice(0, rowArticle)
              .map((news, key) => (
                <NewsCard
                  buttonText={props.buttonText}
                  buttonClass={props.buttonClass}
                  buttonClassActive={props.buttonClassActive}
                  keyWords={props.keyWords}
                  key={key}
                  news={news}
                  isSuccess={props.isSuccess}
                  loggedIn={props.loggedIn}
                  currentUser={props.currentUser}
                  handleSaveDeleteClick={props.handleSaveDeleteClick}
                  saveNewsCards={props.saveNewsCards}
                  pathname={props.pathname}
                />
              ))
          : ""}
      </div>
      <button
        onClick={handleAddArticles}
        className={
          rowArticle < props.cards.length
            ? "news__button"
            : "news__button news__button_disabled"
        }
      >
        Показать еще
      </button>
    </section>
  );
}

export default NewsCardList;
