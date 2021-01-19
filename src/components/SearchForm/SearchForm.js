import React from "react";
import "./SearchForm.css";

function SearchForm(props) {
  return (
    <form
      className="search__form"
      method="GET"
      action="#"
      name={`${props.name}`}
      noValidate
      onSubmit={props.onSubmit}
    >
      <input className="form__input" placeholder="Введите тему новости"></input>
      <button className="form__submit" type="submit">
        Искать
      </button>
    </form>
  );
}

export default SearchForm;
