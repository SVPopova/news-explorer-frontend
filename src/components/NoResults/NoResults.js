import React from "react";
import "./NoResults.css";
import noResults from "../../images/noResults.svg";

function NoResults(props) {
  return (
    <section
      className={
        props.isNoResults ? "no-results no-results_active" : "no-results"
      }
    >
      <img className="no-results__img" src={noResults} alt="Нет результатов" />
      <h3 className="no-results__title">Ничего не найдено</h3>
      <p className="no-results__subtitle">
        К сожалению по вашему запросу ничего не найдено.
      </p>
    </section>
  );
}

export default NoResults;
