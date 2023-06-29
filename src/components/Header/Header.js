import i18n from "../../language/i18next";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.svg"
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.scss";

export const Header = () => {
  const { t } = useTranslation();

  const handleChangeLang = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const ref = useRef();

  const showBar = () => {
    ref.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="header__nav">
            <Link to="/">
              <img className="header__logo" src={Logo} alt="Logo" />
            </Link>

            <ul className="header__list" ref={ref}>
              <li className="header__item">
                <Link to="/">{t("nav-home")}</Link>
              </li>
              <li className="header__item">
                <a href="#about_company">{t("nav-about")}</a>
              </li>
              <li className="header__item">
                <Link to="/">{t("nav-portfolio")}</Link>
              </li>
              <li className="header__item">
                <Link to="/">{t("nav-service")}</Link>
              </li>
              <li className="header__item">
                <a href="#subscibe_zone">{t("nav-contact")}</a>
              </li>
              <li className="header__item">
                <Link to="/">{t("nav-work")}</Link>
              </li>
              <button
                className="header__menu header__close-btn"
                onClick={showBar}>
                <FaTimes />
              </button>
            </ul>
            <select className="header__select" onChange={handleChangeLang}>
              <option value="uz">uz</option>
              <option value="ru">ru</option>
              <option value="en">en</option>
            </select>
            <button className="header__menu" onClick={showBar}>
              <FaBars />
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};
