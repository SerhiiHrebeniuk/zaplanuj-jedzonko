import React from "react";
import { Link } from "react-scroll";
import "./Header.scss";

const Header = () => {
  return (
    <section className="header">
      <div className="header__logo">
        <span className="header__first">Zaplanuj</span>
        <span className="header__second">Jedzonko</span>
      </div>
      <nav className="header__menu">
        <ul className="header__menu-list">
          <li className="header__item">
          <Link to="#">Zaplanuj posiłki!</Link>
          </li>
          <li className="header__item">
          <Link to="#">Dlaczego warto?</Link>
          </li>
          <li className="header__item">
          <Link to="#">O mnie</Link>
          </li>
          <li className="header__item">
          <Link to="#">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Header;