import React, { useEffect } from "react";

import Logo from "./Images/logo.svg";

const Header = () => {
  useEffect(() => {
    const hamburger = document.querySelector(".nav__hamburger");
    const navMenu = document.querySelector(".nav__menu");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  });

  return (
    <header className="header">
      <nav className="nav">
        <img src={Logo} alt="Logo" className="nav__branding" />

        <ul className="nav__menu">
          <li className="nav__item">
            <a href="/" className="nav__link">
              Features
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">
              Pricing
            </a>
          </li>
          <li className="nav__item">
            <a href="/" className="nav__link">
              Resources
            </a>
          </li>
          <hr className="nav__line" />
          <li className="nav__item">
            <a href="/" className="nav__link">
              Login
            </a>
          </li>
          <li className="nav__item">
            <button className="nav__button">Sign Up</button>
          </li>
        </ul>
        <div className="nav__hamburger">
          <span className="nav__hamburger__bar"></span>
          <span className="nav__hamburger__bar"></span>
          <span className="nav__hamburger__bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
