import React from "react";
import "./SavedNews.css";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews() {
  return (
    <>
      <section className="info-news">
        <p className="info-news__text">Сохранённые статьи</p>
        <h1 className=" info-news__title">Грета, у вас 5 сохранённых статей</h1>
        <p className="info-news__key">
          По ключевым словам:<span className="info-news__key_span"></span>
        </p>
      </section>
      <NewsCardList
        buttonText={`Убрать из сохранённых`}
        buttonClass={`element__delete`}
      />
    </>
  );
}

export default SavedNews;
