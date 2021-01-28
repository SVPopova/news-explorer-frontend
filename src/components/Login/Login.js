import React, { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./Login.css";

function Login(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setState((data) => ({
      ...data,
      [name]: value,
    }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!state.email || !state.password) {
      return;
    }
    props.onLogin(state.email, state.password);
  }

  return (
    <PopupWithForm
      name={`login`}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
      onClose={props.onClose}
      onRegister={props.onRegister}
      title={`Вход`}
      button={`Войти`}
      // toLink={}
      textLink={`Зарегистрироваться`}
    >
      <span className="popup__input-label">Email</span>
      <input
        placeholder="Введите почту"
        required
        className="popup__input"
        name="email"
        type="text"
        value={state.email}
        onChange={handleChange}
      />
      <span className="popup__input-label">Пароль</span>
      <input
        placeholder="Введите пароль"
        required
        className="popup__input"
        name="password"
        type="password"
        value={state.password}
        onChange={handleChange}
      />
    </PopupWithForm>
  );
}

export default Login;
