import React from "react";
import "./ErrorResults.css";
import noResults from "../../images/noResults.svg";

function ErrorResults(props) {
  return (
    <section
      className={
        props.isErrorResults
          ? "error-results error-results_active"
          : "error-results"
      }
    >
      <img
        className="error-results__img"
        src={noResults}
        alt="Нет результатов"
      />
      <p className="error-results__subtitle">
        Во время запроса произошла ошибка. Возможно, проблема с соединением или
        сервер недоступен. Подождите немного и попробуйте ещё раз
      </p>
    </section>
  );
}

export default ErrorResults;
