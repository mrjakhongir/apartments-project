import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <div>
      <Link to="/" className="header__logo"></Link>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        >
          Главная
        </NavLink>
        <NavLink
          to="projects"
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        >
          Проекты
        </NavLink>
        <NavLink
          to="news"
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        >
          Новости
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        >
          О Кипре
        </NavLink>
        <NavLink
          to="purchase"
          className={({ isActive }) => (isActive ? "active-link" : "nav-link")}
        >
          Покупка
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
