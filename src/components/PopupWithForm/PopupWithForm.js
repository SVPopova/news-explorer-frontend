import React from "react";
import "./PopupWithForm.css";

function PopupWithForm(props) {
  return (
    <section
      className={`popup popup_type_${props.name} ${
        props.isOpen ? "popup_on" : ""
      }`}
    >
      <form
        className="popup__container popup__container_form"
        method="GET"
        action="#"
        name={`${props.name}`}
        noValidate
        onSubmit={props.onSubmit}
      >
        <button
          className="popup__close"
          type="button"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{`${props.title}`}</h2>
        {props.children}
        <button type="submit" className="popup__button">
          {props.button}
        </button>
        <div className="popup__text-box">
          <p className="popup__text">или</p>
          <button
            type="button"
            onClick={
              props.textLink === "Войти" ? props.onLogin : props.onRegister
            }
            className="popup__link"
          >
            {props.textLink}
          </button>
        </div>
      </form>
    </section>
  );
}

export default PopupWithForm;
