import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import "./Main.css";
import About from "../About/About";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import NoResults from "../NoResults/NoResults";
import ErrorResults from "../ErrorResults/ErrorResults";

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
          <SearchForm onSubmit={props.getNews} />
        </div>
      </section>
      <Preloader isPreloader={props.isPreloader} />
      <NoResults isNoResults={props.isNoResults} />
      <ErrorResults isErrorResults={props.isErrorResults} />
      <NewsCardList
        buttonText={`Войдите, чтобы сохранять статьи`}
        buttonClass={`element__save`}
        buttonClassActive={`element__save_active`}
        cards={props.newsCards}
        isSuccess={props.isSuccess}
        keyWords={props.keyWords}
        loggedIn={props.loggedIn}
        handleSaveDeleteClick={props.handleSaveDeleteClick}
        saveNewsCards={props.saveNewsCards}
        pathname={props.pathname}
      >
        <h2 className="news__title">Результаты поиска</h2>
      </NewsCardList>
      <About />
    </>
  );
}

export default Main;
