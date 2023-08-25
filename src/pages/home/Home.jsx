import React, { useState } from "react";
import { svgs } from "../../constants/images";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <section className="welcome">
        <div className="wrapper">
          <h1 className="welcome__title">
            Инвестируйте в свое<br></br> будущее
          </h1>
          <p className="welcome__subtitle">
            Лучшие решения по недвижимости и возможности получения ПМЖ на Кипре
          </p>
          <button className="btn welcome__btn">Оставить заявку</button>
          <div className="welcome__filters flex">
            <div className="accordion type__filter-accordion">
              <div className="type__filter flex">
                <div>
                  <h4>Тип</h4>
                  <p>Все типы</p>
                </div>
                <img src={svgs.caret} alt="" />
              </div>
            </div>

            <div className="accordion region__filter-accordion">
              <div className="type__filter flex">
                <div>
                  <h4>Регион</h4>
                  <p>Все Регионы</p>
                </div>
                <img src={svgs.caret} alt="caret" />
              </div>
            </div>

            <div className="double-type__filter flex">
              <div className="accordion">
                <div className="type__filter flex">
                  <div>
                    <h4>Комнат от</h4>
                    <p>Все </p>
                  </div>
                  <img src={svgs.caret} alt="caret" />
                </div>
              </div>
              <div className="accordion">
                <div className="type__filter flex">
                  <div>
                    <h4>До</h4>
                    <p>Все </p>
                  </div>
                  <img src={svgs.caret} alt="caret" />
                </div>
              </div>
            </div>

            <div className="double-type__filter flex">
              <div className="accordion">
                <div className="type__filter flex">
                  <div>
                    <h4>Цена от</h4>
                    <p>Все </p>
                  </div>
                  <img src={svgs.caret} alt="" />
                </div>
              </div>

              <div className="accordion">
                <div className="type__filter flex">
                  <div>
                    <h4>До</h4>
                    <p>Все </p>
                  </div>
                  <img src={svgs.caret} alt="" />
                </div>
              </div>
            </div>

            <div className=" welcome__search flex">
              <img src={svgs.search} alt="search" />
              <input type="text" placeholder="Поиск" />
            </div>
          </div>
        </div>
      </section>

      <section className="home__about">
        <div className="flex">
          <div>
            <h1>20+</h1>
            <p>Лет опыта</p>
          </div>
          <div>
            <h1>300+</h1>
            <p>Довольных клиентов</p>
          </div>
          <div>
            <h1>1000+</h1>
            <p>Уникальных предложений</p>
          </div>
          <div>
            <h1>5</h1>
            <p>Личных проектов</p>
          </div>
          <div>
            <h1 className="red__title">50+</h1>
            <p>Партнеров</p>
          </div>
        </div>
      </section>

      <section className="home__about-desctiption">
        <div className="wrapper">
          <div className="home__about-description_content">
            <h2>Reiwa Investments</h2>
            <p>
              Мы предоставляем широкий спектр услуг, которые помогут вам стать
              законным обладателем роскошной недвижимости на Средиземноморском
              побережье, а также обезопасить ваши инвестиции и получить доступ к
              международной финансовой системе. Будучи ведущим Real-estate
              агентством и самостоятельным девелопером на острове, группа
              компаний Reiwa насчитывает 20-летний опыт работы в сфере
              консалтинга и недвижимости на Кипре.
            </p>
          </div>
        </div>
      </section>

      <section className="home__service">
        <div className="wrapper">
          <h1 className="service__title">Наши услуги</h1>
          <div className="flex-c">
            <div className="service-row1 flex">
              <img src={svgs.diplomat} alt="" />
              <img src={svgs.line} alt="" />
              <img src={svgs.clinicalNotes} alt="" />
              <img src={svgs.line} alt="" />
              <img src={svgs.savings} alt="" />
            </div>
            <div className="service-row2 flex">
              <div>
                <h3>Для бизнеса</h3>
                <p>
                  Регистрация бизнеса Релокация компаний Оформление IP-box для
                  IT компаний Коммерческие объекты и офисы Открытие банковского
                  счета
                </p>
              </div>
              <div>
                <h3>Вид на жительство</h3>
                <p>
                  Выбор программы Юридическая поддержка Подбор объекта
                  инвестиций Консультация на всех этапах
                </p>
              </div>
              <div>
                <h3>Инвестиционные проекты</h3>
                <p>
                  Оценка недвижимости Управление проектами Земельные участки под
                  застройку Инвестиционные предложения Разработка бизнес-планов
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
