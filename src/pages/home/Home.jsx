import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { svgs } from "../../constants/images";
import { pngs } from "../../constants/images";
import "./home.scss";

const projects = [
  {
    houseIndex: "001",
    houseImgUrl: pngs.house1,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Частные",
  },
  {
    houseIndex: "002",
    houseImgUrl: pngs.house2,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Частные",
  },
  {
    houseIndex: "003",
    houseImgUrl: pngs.house3,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Частные",
  },
  {
    houseIndex: "004",
    houseImgUrl: pngs.house4,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Частные",
  },
  {
    houseIndex: "005",
    houseImgUrl: pngs.house1,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Коммерческие",
  },
  {
    houseIndex: "006",
    houseImgUrl: pngs.house2,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Коммерческие",
  },
  {
    houseIndex: "007",
    houseImgUrl: pngs.house3,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Коммерческие",
  },
  {
    houseIndex: "008",
    houseImgUrl: pngs.house4,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Коммерческие",
  },
  {
    houseIndex: "009",
    houseImgUrl: pngs.house1,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Инвестиционные",
  },
  {
    houseIndex: "010",
    houseImgUrl: pngs.house2,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Инвестиционные",
  },
  {
    houseIndex: "011",
    houseImgUrl: pngs.house3,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Инвестиционные",
  },
  {
    houseIndex: "012",
    houseImgUrl: pngs.house4,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Инвестиционные",
  },
];

function Home() {
  const [searchParams, setSearchparams] = useSearchParams();
  const typeFilter = searchParams.get("type") || "частные";
  const filteredData =
    typeFilter && typeFilter !== "все"
      ? projects.filter((house) => house.type.toLowerCase() === typeFilter)
      : projects;

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

      <section className="home__section1">
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

      <section className="home__section2">
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

      <section className="home__section3">
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

      <section className="home__section4">
        <div className="wrapper">
          <h1>Услуги представительства</h1>
          <p>
            <strong>Reiwa</strong> имеет собственного представителя,
            действующего от имени компании и представляющего ее интересы на
            территории РУз. Его деятельность предполагает информационную
            поддержку и техническое сопровождение потенциальных инвесторов на
            этапе знакомства с недвижимостью.
          </p>
          <p>
            <strong>
              Наша команда состоит из профессиональных консультантов, которые
              знают каждый аспект жизни на острове:
            </strong>
            <ul>
              <li>- регистрация юридического лица</li>
              <li>- открытие банковского счета</li>
              <li>- налоговое планирование</li>
              <li>- полное сопровождение покупки дома вашей мечты</li>
              <li>- управление недвижимостью</li>
              <li>- получение постоянного вида на жительства</li>
            </ul>
          </p>
          <p>
            <strong>
              Мы занимаемся предоставлением клиентам достоверной и актуальной
              информации в области:
            </strong>
            <ul>
              <li>
                ⁃ реализуемых жилых и коммерческих объектов, а также собственных
                проектов Reiwa Investments;
              </li>
              <li>
                ⁃ жизни на Кипре (экономика, климатические условия, еда, досуг,
                шопинг, обучение, медицина и пр);
              </li>
              <li>⁃ порядка получения ПМЖ;</li>
              <li>⁃ порядка и правил получения визы для граждан РУз;</li>
              <li>⁃ вариантов авиаперелетов;</li>
              <li>⁃ обработки персональных запросов.</li>
            </ul>
          </p>
          <p>
            <strong>
              Помощь в планировании и организации поездки на Кипр:
            </strong>
            <ul>
              <li>⁃ консультирование по части бронирования авиабилетов;</li>
              <li>⁃ консультирование по части бронирования авиабилетов;</li>
              <li>
                ⁃ организация трансфера и персональное сопровождение на Кипре;
              </li>
              <li>⁃ планирование встреч в офисах девелоперов на Кипре.</li>
            </ul>
          </p>
          <p>
            <strong>
              Организация онлайн и персональных встреч потенциальных покупателей
              с юристами и официальными представителями кипрской стороны:
            </strong>
            <ul>
              <li>
                ⁃ выбор оптимальной платформы и времени встречи для обеих
                сторон;
              </li>
              <li>
                ⁃ подготовка и обработка вопросов/запросов для обратной связи с
                инвесторами.
              </li>
            </ul>
          </p>
        </div>
      </section>

      <section className="home__section5">
        <div className="wrapper">
          <h2>Вид на жительство на Кипре</h2>
          <p>
            Мы оказываем помощь в получении постоянного места жительства и вида
            на жительство: юридически сопровождаем подготовку и подачу
            документов для получения постоянного места жительства по программе
            ускоренного получения гражданства.
          </p>
          <button className="btn">Подробнее</button>
        </div>
      </section>

      <section className="home__section6">
        <div className="wrapper">
          <h1>Наши проекты</h1>
          <div className="section6-navigation flex">
            <button
              className={`filter-btn ${
                typeFilter === "частные" ? "selected" : ""
              }`}
              onClick={() => setSearchparams({ type: "частные" })}
            >
              Частные
            </button>
            <button
              className={`filter-btn ${
                typeFilter === "коммерческие" ? "selected" : ""
              }`}
              onClick={() => setSearchparams({ type: "коммерческие" })}
            >
              Коммерческие
            </button>
            <button
              className={`filter-btn ${
                typeFilter === "инвестиционные" ? "selected" : ""
              }`}
              onClick={() => setSearchparams({ type: "инвестиционные" })}
            >
              Инвестиционные
            </button>
            <button
              className={`filter-btn ${typeFilter === "все" ? "selected" : ""}`}
              onClick={() => setSearchparams({ type: "все" })}
            >
              Смотреть все проекты
            </button>
          </div>
          <div className="home__section6-projects">
            {filteredData.map((house) => (
              <div key={house.index} className="house-card">
                <div className="card-header">
                  <img src={house.houseImgUrl} alt="" />
                  <p className="house-index">{house.houseIndex}</p>
                </div>
                <div className="card-content">
                  <h3>{house.houseName}</h3>
                  <div>
                    <div>
                      <img
                        style={{ width: "14px" }}
                        src={svgs.bedIcon}
                        alt=""
                      />
                      <span>от {house.houseRoomMin}-х комнат</span>
                    </div>
                    <div>
                      <img
                        style={{ width: "14px" }}
                        src={svgs.sofaIcon}
                        alt=""
                      />
                      <span>от {house.houseAreaMin} m2</span>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button>Подробнее</button>
                    <span>€{house.housePrice}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home__section7">
        <div className="wrapper">
          <h1>Новости</h1>
          <div>
            <div>
              <img src={pngs.homeNews1} alt="" />
              <p>
                Знак является, согласно Еврокомиссии, «комбинацией греческого
                эпсилона как показателя значимости европейской цивилизации
              </p>
            </div>
            <div>
              <img src={pngs.homeNews2} alt="" />
              <p>
                Как узнать версии пакетов у Ubuntu в официальном релизе на
                определённую дату?
              </p>
            </div>
            <div>
              <img src={pngs.homeNews3} alt="" />
              <p>
                Есть ли в природе электронный замок с функцией временного
                отключения открытия физическим ключом?
              </p>
            </div>
          </div>
          <button className="section7-btn">Смотреть все</button>
        </div>
      </section>

      <section className="home__section8">
        <div className="wrapper">
          <div className="home__contacts">
            <div className="contacts-left">
              <img src={pngs.logoLight} alt="" />
              <div className="contects-left_content">
                <div className="flex">
                  <img src={svgs.phoneIcon} alt="" />
                  <span>+998 (90) 039 88 68</span>
                </div>
                <div className="flex">
                  <img src={svgs.telegramIcon} alt="" />
                  <span>@reiwa_uzb </span>
                </div>
                <div className="flex">
                  <img src={svgs.emailIcon} alt="" />
                  <span>reiwasmm@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="contacts-right">
              <img src={pngs.logoDark} alt="" />
              <div>
                <h2>Оставьте заявку</h2>
                <p>И получите подробную информацию</p>
                <button>Заполнить</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
