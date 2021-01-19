import React from "react";
import "./About.css";
import avatar from "../../images/avatar.png";

function About(props) {
  return (
    <section className="author">
      <img className="author__avatar" src={avatar} ait="Аватар"></img>
      <div className="author__about">
        <h2 className="author__title">Об авторе</h2>
        <p className="author__text">
          Это блок с описанием автора проекта. Здесь следует указать, как вас
          зовут, чем вы занимаетесь, какими технологиями разработки владеете.
        </p>
        <p className="author__text">
          Также можно рассказать о процессе обучения в Практикуме, чему вы тут
          научились, и чем можете помочь потенциальным заказчикам.
        </p>
      </div>
    </section>
  );
}

export default About;
