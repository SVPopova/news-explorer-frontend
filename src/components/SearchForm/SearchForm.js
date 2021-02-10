import React from "react";
import "./SearchForm.css";
import { useFormWithValidation } from "../../utils/Validate";

function SearchForm(props) {
  const [request, setRequest] = React.useState(``);
  const validate = useFormWithValidation();

  function handleChange(e) {
    const { value } = e.target;
    setRequest(value);
    validate.handleChange(e);
  }
  function requestSubmit(e) {
    e.preventDefault();
    props.onSubmit(request);
    validate.resetForm();
  }

  return (
    <form
      className="search__form"
      method="GET"
      action="#"
      name={`${props.name}`}
      noValidate
      onSubmit={useFormWithValidation}
    >
      <input
        id="search"
        name="search"
        className="form__input"
        placeholder="Введите тему новости"
        required
        type="text"
        onChange={handleChange}
      ></input>

      <button
        disabled={!validate.isValid}
        onClick={requestSubmit}
        className="form__submit"
        type="submit"
      >
        Искать
      </button>
      <span className="search__error">{validate.errors.search}</span>
    </form>
  );
}

export default SearchForm;
