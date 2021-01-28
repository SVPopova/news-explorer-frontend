import React from "react";
import "./InfoTooltip.css";

function InfoTooltip(props) {
  return (
    <>
      <section className={`popup  ${props.isOpen ? "popup_on" : ""}`}>
        <div className="popup__container popup__container_info">
          <button className="popup__close" onClick={props.onClose}></button>
          <p className="popup__infoTooltip-text">
            Пользователь успешно зарегистрирован!
          </p>
          <button
            type="button"
            onClick={props.handleLogin}
            className="popup__link"
          >
            Войти
          </button>
        </div>
      </section>
    </>
  );
}

export default InfoTooltip;
