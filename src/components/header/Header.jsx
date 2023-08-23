import React from "react";
import { NavLink, Link } from "react-router-dom";

import { pngs } from "../../constants/images";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="header__inner flex">
          <Link to="/" className="header__logo">
            <img src={pngs.logoDark} alt="" />
          </Link>
          <nav className="header__navigation flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              Главная
            </NavLink>
            <NavLink
              to="projects"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              Проекты
            </NavLink>
            <NavLink
              to="news"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              Новости
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              О Кипре
            </NavLink>
            <NavLink
              to="purchase"
              className={({ isActive }) =>
                isActive ? "active-link" : "nav-link"
              }
            >
              Покупка
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
