import React from "react";
import { Link } from "react-router-dom";
import "./SavedNewsHeader.css";
import exit from "../../images/exit.svg";

function SavedNewsHeader(props) {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  function menuOpen() {
    setMenuOpen(true);
  }
  function menuClose() {
    setMenuOpen(false);
  }
  return (
    <header className="header-saved-news">
      <Link className="header-saved-news__logo-link" to="./">
        NewsExplorer
      </Link>
      <button
        onClick={menuOpen}
        className={
          isMenuOpen
            ? "header-saved-news__menu"
            : "header-saved-news__menu header-saved-news__menu_active"
        }
      ></button>
      <button
        onClick={menuClose}
        className={
          isMenuOpen
            ? "header-saved-news__menu-close header-saved-news__menu_active"
            : "header-saved-news__menu-close"
        }
      ></button>
      <div
        className={
          isMenuOpen
            ? `header__box_mob header__box_mob_white header__box_mob_active`
            : `header__box_mob`
        }
      >
        <div className="header-saved-news__menu-box">
          <Link to="./" className="header-saved-news__link">
            Главная
          </Link>
          <Link
            to="./saved-news"
            className="header-saved-news__link header-saved-news__link_active"
          >
            Сохранённые статьи
          </Link>
        </div>
        <button
          type="button"
          className="header-saved-news__button header-saved-news__button_search"
          onClick={props.onSignOut}
        >
          {props.currentUser.name}
          <img className="header-saved-news__exit-img" alt="выход" src={exit} />
        </button>
      </div>
      <div className="header-saved-news__box">
        <Link to="./" className="header-saved-news__link">
          Главная
        </Link>
        <Link
          to="./saved-news"
          className="header-saved-news__link header-saved-news__link_save header-saved-news__link_active"
        >
          Сохранённые статьи
        </Link>
        <button
          type="button"
          className="header-saved-news__button header-saved-news__button_search"
          onClick={props.onSignOut}
        >
          {props.currentUser.name}
          <img className="header-saved-news__exit-img" alt="выход" src={exit} />
        </button>
      </div>
    </header>
  );
}

export default SavedNewsHeader;
