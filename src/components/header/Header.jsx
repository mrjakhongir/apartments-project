import React from "react"
import { NavLink, Link } from "react-router-dom"

import { svgs } from "../../constants/images"
import "./header.scss"

function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="header__inner flex">
          <div className="hamburger">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <Link to="/" className="header__logo">
            <img src={svgs.logoDark} alt="logo" />
          </Link>
          <nav className="header__navigation flex">
            <div className="mobile-menu">
              <img src={svgs.logoDark} alt="logo" />
              <img src={svgs.exitIcon} alt="exit" />
            </div>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              <span>Главная</span>
              <img src={svgs.linkIcon} alt="" />
            </NavLink>
            <NavLink
              to="projects"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              <span>Проекты</span>
              <img src={svgs.linkIcon} alt="" />
            </NavLink>
            <NavLink
              to="news"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              <span>Новости</span>
              <img src={svgs.linkIcon} alt="" />
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              <span>О Кипре</span>
              <img src={svgs.linkIcon} alt="" />
            </NavLink>
            <NavLink
              to="purchase"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              <span>Покупка</span>
              <img src={svgs.linkIcon} alt="" />
            </NavLink>
            <div className="nav-contacts">
              <div>
                <img src={svgs.telegramIcon} alt="" />
                <a href="https://t.me/reiwa_uzb">@reiwa_uzb</a>
              </div>
              <div>
                <img src={svgs.phoneIcon} alt="" />
                <a href="tel: +998900398868">+998 90 039 8868</a>
              </div>
              <div>
                <img src={svgs.emailIcon} alt="" />
                <a href="mailto: reiwa@gmail.com">reiwa@gmail.com</a>
              </div>
              <div className="social-icons">
                <a href="#instagram">
                  <img src={svgs.instagramSquare} alt="instagram" />
                </a>
                <a href="#telegram">
                  <img src={svgs.telegramSquare} alt="telegram" />
                </a>
                <a href="#facebook">
                  <img src={svgs.facebookSquare} alt="facebook" />
                </a>
              </div>
            </div>
          </nav>
          <button className="header-search-btn">Поиск</button>
          <div className="header-search-content">
            <div className="filter-top">
              <img src={svgs.exitIcon} alt="" />
              <span>поиск</span>
            </div>
            <div className="filters">
              <div className="accordion">
                <div>
                  <h4>Тип</h4>
                  <p>Все типы</p>
                </div>
                <img src={svgs.caret} alt="caret" />
              </div>
              <div className="accordion">
                <div>
                  <h4>Регион</h4>
                  <p>Все регионы</p>
                </div>
                <img src={svgs.caret} alt="caret" />
              </div>
              <div className="double-type__filter">
                <div className="accordion">
                  <div>
                    <h4>Комнат от</h4>
                    <p>Все</p>
                  </div>
                  <img src={svgs.caret} alt="caret" />
                </div>
                <div className="accordion">
                  <div>
                    <h4>До</h4>
                    <p>Все</p>
                  </div>
                  <img src={svgs.caret} alt="caret" />
                </div>
              </div>
              <div className="double-type__filter">
                <div className="accordion">
                  <div>
                    <h4>Цена от</h4>
                    <p>Все</p>
                  </div>
                  <img src={svgs.caret} alt="caret" />
                </div>
                <div className="accordion">
                  <div>
                    <h4>До</h4>
                    <p>Все</p>
                  </div>
                  <img src={svgs.caret} alt="caret" />
                </div>
              </div>
              <button>Поиск</button>
            </div>
            <div className="filters-application">
              <p>Оставьте заявку и мы подберем для вас лучший вариант </p>
              <button>Заполнить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
