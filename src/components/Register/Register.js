import React, { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./Register.css";
function Register(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    name: "",
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
    if (state.password) {
      props.onRegister(state.email, state.password, state.name);
    }
  }

  return (
    <PopupWithForm
      name={`register`}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
      onClose={props.onClose}
      onLogin={props.onLogin}
      title={`Регистрация`}
      button={`Зарегистрироваться`}
      // toLink={}
      textLink={`Войти`}
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
      <span className="popup__input-label">Имя</span>
      <input
        placeholder="Введите своё имя"
        required
        className="popup__input"
        name="name"
        type="text"
        value={state.name}
        onChange={handleChange}
      />
    </PopupWithForm>
  );
}

export default Register;
