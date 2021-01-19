import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList(props) {
  return (
    <section className="news">
      {props.children}
      <div className="elements">
        <NewsCard
          buttonText={props.buttonText}
          buttonClass={props.buttonClass}
        />
        {/* {props.cards.map((card) => (
          <NewsCard
            onCardLike={props.onCardLike}
            key={card._id}
            onCardClick={props.onSelectedCard}
            onCardDelete={props.onCardDelete}
            card={card}
          />
        ))} */}
      </div>
      <button className="news__button">Показать еще</button>
    </section>
  );
}

export default NewsCardList;
