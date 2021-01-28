import React from "react";
import { Link } from "react-router-dom";
import exit from "../../images/exit-white.svg";
import "./Header.css";
import { CurrentUserContext } from "../../utils/CurrentUserContext";

function Header(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  function menuOpen() {
    setMenuOpen(true);
  }
  function menuClose() {
    setMenuOpen(false);
  }
  return (
    <header
      className={
        isMenuOpen
          ? props.loginOpen || props.registerOpen
            ? `header header__block`
            : `header header_black`
          : props.loginOpen || props.registerOpen
          ? `header header__block`
          : `header`
      }
    >
      {props.loggedIn ? (
        <>
          <Link className="header__logo-link" to="./">
            NewsExplorer
          </Link>
          <button
            onClick={menuOpen}
            className={
              isMenuOpen ? "header__menu" : "header__menu header__menu_active"
            }
          ></button>
          <button
            onClick={menuClose}
            className={
              isMenuOpen
                ? "header__menu-close header__menu_active"
                : "header__menu-close"
            }
          ></button>
          <div
            className={
              isMenuOpen
                ? `header__box_mob header__box_mob_active`
                : `header__box_mob`
            }
          >
            <Link
              to="./"
              className="header__link header__link_mob header__link_active"
            >
              Главная
            </Link>
            <Link to="./saved-news" className="header__link header__link_mob">
              Сохранённые статьи
            </Link>
            <button
              type="button"
              className="header__button"
              onClick={props.onSignOut}
            >
              {currentUser.name}
              <img className="header-button-img" alt="выход" src={exit} />
            </button>
          </div>

          <div className="header__box">
            <Link to="./" className="header__link header__link_active">
              Главная
            </Link>
            <Link to="./saved-news" className="header__link">
              Сохранённые статьи
            </Link>
            <button
              type="button"
              className="header__button"
              onClick={props.onSignOut}
            >
              {currentUser.name}
              <img className="header-button-img" alt="выход" src={exit} />
            </button>
          </div>
        </>
      ) : (
        <>
          <Link className="header__logo-link" to="./">
            NewsExplorer
          </Link>
          <button
            onClick={menuOpen}
            className={
              isMenuOpen ? "header__menu" : "header__menu header__menu_active"
            }
          ></button>
          <button
            onClick={menuClose}
            className={
              isMenuOpen
                ? "header__menu-close header__menu_active"
                : "header__menu-close"
            }
          ></button>
          <div
            className={
              isMenuOpen
                ? `header__box_mob header__box_mob_active`
                : `header__box_mob`
            }
          >
            <Link
              to="./"
              className="header__link header__link_mob header__link_active"
            >
              Главная
            </Link>
            <button
              type="button"
              className="header__button"
              onClick={props.onLogin}
            >
              Авторизоваться
            </button>
          </div>

          <div className="header__box">
            <Link to="./" className="header__link header__link_active">
              Главная
            </Link>
            <button
              type="button"
              className="header__button"
              onClick={props.onLogin}
            >
              Авторизоваться
            </button>
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
