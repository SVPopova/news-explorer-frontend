import React from "react";
import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import { CurrentUserContext } from "../../utils/CurrentUserContext";

function SavedNews(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const keywords = props.saveNewsCards
    .map((news) => news.keyword)
    .reduce((a, x) => (a.includes(x) ? a : [...a, x]), [])
    .sort();
  console.log(keywords);
  return (
    <>
      <SavedNewsHeader currentUser={currentUser} onSignOut={props.onSignOut} />
      <section className="info-news">
        <p className="info-news__text">Сохранённые статьи</p>
        <h1 className=" info-news__title">
          {currentUser.name}, у вас {props.saveNewsCards.length} сохранённых
          статей
        </h1>
        <p className="info-news__key">
          По ключевым словам:
          <span className="info-news__key_span">
            {keywords.length === 0
              ? ""
              : `${keywords[0]}, ${keywords[1] ? keywords[1] : ""} ${
                  keywords.length - 2 > 0
                    ? `и другим.`(keywords.length - 2)
                    : ``
                }`}
          </span>
        </p>
      </section>
      <NewsCardList
        buttonText={`Убрать из сохранённых`}
        buttonClass={``}
        buttonClassActive={`element__delete`}
        cards={props.saveNewsCards}
        isSuccess={props.isSuccess}
        keyWords={props.keyWords}
        loggedIn={props.loggedIn}
        handleSaveDeleteClick={props.handleSaveDeleteClick}
        saveNewsCards={props.saveNewsCards}
        pathname={props.pathname}
      />
    </>
  );
}

export default SavedNews;
