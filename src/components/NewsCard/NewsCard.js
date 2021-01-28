import React from "react";
import { Route, Switch } from "react-router-dom";
import "./NewsCard.css";
// import { CurrentUserContext } from "../../../context/CurrentUserContext";

function NewsCard(props) {
  const isSaved = props.saveNewsCards.some((i) => i.link === props.news.url);
  const date = new Date(
    props.isSuccess && props.pathname === "/"
      ? `${props.news.publishedAt}`
      : `${props.news.date}`
  );
  const fullDate = `${date.toLocaleString("ru", {
    day: "numeric",
    month: "long",
  })}, ${date.getFullYear()}`;

  return (
    <div className="element">
      <Switch>
        <Route path="/saved-news">
          <div className="element__box">
            <p className="element__key">{props.news.keyword}</p>
            <div className="element__button-box">
              <p
                className={
                  props.loggedIn
                    ? "element__button-text"
                    : "element__button-text_disabled"
                }
              >
                {props.buttonText}
              </p>
              <button
                type="button"
                onClick={() => props.handleSaveDeleteClick(props.news._id)}
                className={props.buttonClassActive}
              ></button>
            </div>
          </div>
          <a
            href={props.isSuccess ? props.news.link : ""}
            className="elements__link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="element__image"
              src={props.isSuccess ? props.news.image : ""}
              alt={props.isSuccess ? props.news.title : ""}
            />
            <div className="element__group">
              <p className="element__date">{fullDate}</p>
              <h2 className="element__title">
                {props.isSuccess ? props.news.title : ""}
              </h2>
              <p className="element__text">
                {props.isSuccess ? props.news.text : ""}
              </p>
              <p className="element__source">
                {props.isSuccess ? props.news.source : ""}
              </p>
            </div>
          </a>
        </Route>
        <Route path="/">
          <div className="element__box">
            <p className="element__key">{props.keyWords}</p>
            <div className="element__button-box">
              <p
                className={
                  !props.loggedIn
                    ? "element__button-text"
                    : "element__button-text_disabled"
                }
              >
                {props.buttonText}
              </p>
              <button
                type="button"
                onClick={() => props.handleSaveDeleteClick(props.news)}
                disabled={!props.loggedIn}
                className={
                  isSaved ? props.buttonClassActive : props.buttonClass
                }
              ></button>
            </div>
          </div>
          <a
            href={props.isSuccess ? props.news.url : ""}
            className="elements__link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="element__image"
              src={props.isSuccess ? props.news.urlToImage : ""}
              alt={props.isSuccess ? props.news.title : ""}
            />
            <div className="element__group">
              <p className="element__date">{fullDate}</p>
              <h2 className="element__title">
                {props.isSuccess ? props.news.title : ""}
              </h2>
              <p className="element__text">
                {props.isSuccess ? props.news.description : ""}
              </p>
              <p className="element__source">
                {props.isSuccess ? props.news.source.name : ""}
              </p>
            </div>
          </a>
        </Route>
      </Switch>
    </div>
  );
}

export default NewsCard;
