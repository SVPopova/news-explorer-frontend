import React from "react";
import "./Preloader.css";

function Preloader(props) {
  return (
    <section
      className={props.isPreloader ? "preloader preloader_active" : "preloader"}
    >
      <i className="preloader__circle"></i>
      <p className="preloader__subtitle">Идет поиск новостей...</p>
    </section>
  );
}

export default Preloader;
