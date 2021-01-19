import React from "react";
import "./NewsCard.css";
// import { CurrentUserContext } from "../../../context/CurrentUserContext";
import imagecard from "../../images/9bcf10fad167eec5823edbf9d2cce076.jpg";

function NewsCard(props) {
  // const currentUser = React.useContext(CurrentUserContext);
  // const cardDeleteButtonClassName = `element__basket ${
  //   props.card.owner === currentUser._id ? "element__basket_active" : ""
  // }`;
  // const cardLikeButtonClassName = `element__like ${
  //   props.card.likes.some((i) => i === currentUser._id)
  //     ? "element__like_active"
  //     : ""
  // }`;

  return (
    <>
      <div className="element">
        <div className="element__box">
          <p className="element__key">Природа</p>
          <div className="element__button-box">
            <p className="element__button-text">{props.buttonText}</p>
            <button
              type="button"
              // onClick={handleDeleteClick}
              className={props.buttonClass}
            ></button>
          </div>
        </div>

        <img
          className="element__image"
          src={imagecard}
          // alt={props.card.name}
          // onClick={handleClick}
        />
        <div className="element__group">
          <p className="element__date">2 августа, 2019</p>
          <h2 className="element__title">Национальное достояние – парки</h2>
          <p className="element__text">
            В 2016 году Америка отмечала важный юбилей: сто лет назад здесь
            начала складываться система национальных парков – охраняемых
            территорий, где и сегодня каждый может приобщиться к природе.
          </p>
          <p className="element__source">Дзен</p>
        </div>
      </div>
      <div className="element">
        <div className="element__box">
          <p className="element__key">Природа</p>
          <div className="element__button-box">
            <p className="element__button-text">{props.buttonText}</p>
            <button
              type="button"
              // onClick={handleDeleteClick}
              className={props.buttonClass}
            ></button>
          </div>
        </div>

        <img
          className="element__image"
          src={imagecard}
          // alt={props.card.name}
          // onClick={handleClick}
        />
        <div className="element__group">
          <p className="element__date">2 августа, 2019</p>
          <h2 className="element__title">Национальное достояние – парки</h2>
          <p className="element__text">
            В 2016 году Америка отмечала важный юбилей: сто лет назад здесь
            начала складываться система национальных парков – охраняемых
            территорий, где и сегодня каждый может приобщиться к природе.
          </p>
          <p className="element__source">Дзен</p>
        </div>
      </div>
      <div className="element">
        <div className="element__box">
          <p className="element__key">Природа</p>
          <div className="element__button-box">
            <p className="element__button-text">{props.buttonText}</p>
            <button
              type="button"
              // onClick={handleDeleteClick}
              className={props.buttonClass}
            ></button>
          </div>
        </div>

        <img
          className="element__image"
          src={imagecard}
          // alt={props.card.name}
          // onClick={handleClick}
        />
        <div className="element__group">
          <p className="element__date">2 августа, 2019</p>
          <h2 className="element__title">Национальное достояние – парки</h2>
          <p className="element__text">
            В 2016 году Америка отмечала важный юбилей: сто лет назад здесь
            начала складываться система национальных парков – охраняемых
            территорий, где и сегодня каждый может приобщиться к природе.
          </p>
          <p className="element__source">Дзен</p>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
