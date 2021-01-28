import React, { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./Login.css";
import { useFormWithValidation } from "../../utils/Validate";

function Login(props) {
  const validate = useFormWithValidation();
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
    validate.handleChange(e);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!state.email || !state.password) {
      return;
    }
    props.onLogin(state.email, state.password);
    props.onClose();
    validate.resetForm();
  }
  function handleClose() {
    props.onClose();
    validate.resetForm();
  }

  return (
    <PopupWithForm
      name={`login`}
      isOpen={props.isOpen}
      onSubmit={useFormWithValidation}
      onClickLogin={handleSubmit}
      onClose={handleClose}
      handleRegister={props.handleRegister}
      title={`Вход`}
      button={`Войти`}
      disabled={!validate.isValid}
      textLink={`Зарегистрироваться`}
    >
      <span className="popup__input-label">Email</span>
      <input
        placeholder="Введите почту"
        required
        className="popup__input"
        name="email"
        type="email"
        value={state.email}
        onChange={handleChange}
      />
      <span className="register__error">{validate.errors.email}</span>
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
      <span className="register__error">{validate.errors.password}</span>
    </PopupWithForm>
  );
}

export default Login;
