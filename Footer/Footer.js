import React from "react";
import Logo from "./Images/logo-light.svg";

import Facebook from "./Images/icon-facebook.svg";
import Twitter from "./Images/icon-twitter.svg";
import Pinterest from "./Images/icon-pinterest.svg";
import Instagram from "./Images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={Logo} alt="Logo" className="footer__branding" />
      <nav className="footer__nav">
        <ul>
          <span className="footer__name">Features</span>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Link Shortening
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Branded Links
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Analytics
            </a>
          </li>
        </ul>

        <ul>
          <span className="footer__name">Resources</span>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Blog
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Developers
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Support
            </a>
          </li>
        </ul>

        <ul>
          <span className="footer__name">Company</span>
          <li className="footer__item">
            <a href="/" className="footer__link">
              About
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Our Teams
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Careers
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Contacts
            </a>
          </li>
        </ul>

        <ul className="footer__social">
          <li>
            <a href="/">
              <img src={Facebook} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={Twitter} alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={Pinterest} alt="Pinterest" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={Instagram} alt="Instagram" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
