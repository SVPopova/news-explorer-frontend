import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import github from "../../images/github.svg";
import fb from "../../images/fb.svg";

function Footer(props) {
  return (
    <footer className="footer">
      <p className="footer__text">© 2020 Supersite, Powered by News API</p>
      <div className="footer__sidebar">
        <div className="footer__link-box">
          <Link className="footer__link" to="./">
            Главная
          </Link>
          <a
            className="footer__link"
            href="https://praktikum.yandex.ru"
            target="_blank"
          >
            Яндекс.Практикум
          </a>
        </div>
        <div className="footer__social">
          <a
            className="footer__social-link"
            href="https://github.com/SVPopova"
            target="_blank"
          >
            <img
              className="footer__social-icon"
              src={github}
              alt="GitHub"
            ></img>
          </a>
          <a
            className="footer__social-link"
            href="https://www.facebook.com/profile.php?id=100001425281177"
            target="_blank"
          >
            <img className="footer__social-icon" src={fb} alt="Facebook"></img>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
