import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";

function Main(props) {
  return (
    <>
      <section className="search">
        <div className="search__bg">
          <h1 className="search__title">Что творится в мире?</h1>
          <p className="search__subtitle">
            Находите самые свежие статьи на любую тему и сохраняйте в своём
            личном кабинете.
          </p>
          <SearchForm />
        </div>
      </section>
      <NewsCardList
        buttonText={`Войдите, чтобы сохранять статьи`}
        buttonClass={`element__save`}
      >
        <h2 className="news__title">Результаты поиска</h2>
      </NewsCardList>
      <About />
    </>
  );
}

export default Main;
