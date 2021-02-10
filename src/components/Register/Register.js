import React, { useState } from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./Register.css";
import { useFormWithValidation } from "../../utils/Validate";

function Register(props) {
  const validate = useFormWithValidation();
  const [state, setState] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [clear, setClear] = useState();

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
    if (state.password) {
      props.onRegister(state.email, state.password, state.name);
      validate.resetForm();
      state.email = "";
      state.password = "";
      state.name = "";
    }
  }
  function handleClose() {
    props.onClose();
    validate.resetForm();
    state.email = "";
      state.password = "";
      state.name = "";
  }

  return (
    <PopupWithForm
      name={`register`}
      isOpen={props.isOpen}
      onSubmit={useFormWithValidation}
      onClick={handleSubmit}
      onClose={handleClose}
      handleLogin={props.handleLogin}
      title={`Регистрация`}
      button={`Зарегистрироваться`}
      textLink={`Войти`}
      disabled={!validate.isValid}
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
      <span className="popup__input-label">Имя</span>
      <input
        placeholder="Введите своё имя"
        required
        className="popup__input"
        name="name"
        type="text"
        value={state.name}
        onChange={handleChange}
        minLength="2"
        maxLength="30"
      />
      <span className="register__error">{validate.errors.name}</span>
    </PopupWithForm>
  );
}

export default Register;
