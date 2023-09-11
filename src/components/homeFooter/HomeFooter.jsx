import React from 'react'
import { Link } from 'react-router-dom'
import { svgs } from '../../constants/images'
import './homeFooter.scss'

function HomeFooter() {
  return (
    <div className="home-footer">
      <div className="wrapper">
        <div className="footer__inner flex">
          <div>
            <h3 className="footer__title">Наши соц. сети</h3>
            <div className="footer__social-medias flex">
              <a href="#facebook">
                <img src={svgs.linkedinSquare} alt="" />
              </a>
              <a href="#linkedin">
                <img src={svgs.telegramSquare} alt="" />
              </a>
              <a href="#instagram">
                <img src={svgs.facebookSquare} alt="" />
              </a>
            </div>
          </div>
          <div className="footer__navigation">
            <h3 className="footer__title">Навигация по сайту</h3>
            <div className="navigation flex">
              <div className="flex-c">
                <Link to="/">Главная</Link>
                <Link to="/projects">Проекты</Link>
                <Link to="/purchase">Покупка</Link>
              </div>
              <div className="flex-c">
                <Link to="/about">О Kипре</Link>
                <Link to="/">Новости</Link>
              </div>
            </div>
          </div>
          <div className="footer__contacts">
            <h3 className="footer__title">Контакты</h3>
            <div className="flex-c">
              <a href="tel: +998 90 039 88 68">+998 90 039 88 68</a>
              <a href="mailto: reiwamail@gmail.com">reiwamail@gmail.com</a>
              <a href="map">
                Address: 59, Office 01,<br></br> Ellados Leoforos,<br></br>{' '}
                Pafos, 8020
              </a>
            </div>
          </div>
          <div className="footer__licence">
            <h3 className="footer__title">Лицензия</h3>
            <p>Reiwa Group&Reiwa Investments Ltd</p>
            <p>HE 437808</p>
            <p>TAX. 104378</p>
            <p>VAT 10437808U</p>
            <p>License: 1081/595</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeFooter
