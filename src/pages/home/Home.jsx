import React, { useState } from "react";
import { svgs } from "../../constants/images";
import "./home.scss";

function Home() {
  const types = ["type1", "type2", "type3"];
  const regions = ["region1", "region2", "region3"];
  const roomsMin = [1, 2, 3];
  const roomsMax = [4, 5, 6];
  const priceMin = [1000, 2000, 3000];
  const priceMax = [4000, 5000, 6000];

  const [houseType, setHouseType] = useState(false);
  const [currentHouseType, setCurrentHouseType] = useState("Все типы");
  const [houseRegion, setHouseRegion] = useState(false);
  const [houseRoomsMin, setHouseRoomsMin] = useState(false);
  const [houseRoomsMax, setRoomsMax] = useState(false);
  const [housePriceMin, setHousePriceMin] = useState(false);
  const [housePriceMax, setHousePriceMax] = useState(false);
  const [houseSearch, setHouseSearch] = useState(false);

  return (
    <div className="home">
      <div className="wrapper">
        <div className="home__inner">
          <section className="welcome">
            <h1 className="welcome__title">
              Инвестируйте в свое<br></br> будущее
            </h1>
            <p className="welcome__subtitle">
              Лучшие решения по недвижимости и возможности получения ПМЖ на
              Кипре
            </p>
            <button className="btn welcome__btn">Оставить заявку</button>
            <div className="welcome__filters flex">
              <div className="accordion type__filter-accordion">
                <div className="type__filter flex">
                  <div>
                    <h4>Тип</h4>
                    <p>{currentHouseType}</p>
                  </div>
                  <img src={svgs.caret} alt="" />
                </div>
                {houseType && (
                  <div className="accordion-content type__filter-content">
                    {types.map((type) => (
                      <p>{type}</p>
                    ))}
                  </div>
                )}
              </div>

              <div className="accordion region__filter-accordion">
                <div className="type__filter flex">
                  <div>
                    <h4>Регион</h4>
                    <p>Все Регионы</p>
                  </div>
                  <img src={svgs.caret} alt="caret" />
                </div>
                {houseRegion && (
                  <div className="accordion-content">
                    {regions.map((region) => (
                      <p>{region}</p>
                    ))}
                  </div>
                )}
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
                  {houseRoomsMin && (
                    <div className="accordion-content">
                      {roomsMin.map((room) => (
                        <p>{room}</p>
                      ))}
                    </div>
                  )}
                </div>
                <div className="accordion">
                  <div className="type__filter flex">
                    <div>
                      <h4>До</h4>
                      <p>Все </p>
                    </div>
                    <img src={svgs.caret} alt="caret" />
                  </div>
                  {houseRoomsMax && (
                    <div className="accordion-content">
                      {roomsMax.map((room) => (
                        <p>{room}</p>
                      ))}
                    </div>
                  )}
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
                  {housePriceMin && (
                    <div className="accordion-content">
                      {priceMin.map((price) => (
                        <p>{price}</p>
                      ))}
                    </div>
                  )}
                </div>

                <div className="accordion">
                  <div className="type__filter flex">
                    <div>
                      <h4>До</h4>
                      <p>Все </p>
                    </div>
                    <img src={svgs.caret} alt="" />
                  </div>
                  {housePriceMax && (
                    <div className="accordion-content">
                      {priceMax.map((price) => (
                        <p>{price}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className=" welcome__search flex">
                <img src={svgs.search} alt="search" />
                <input type="text" placeholder="Поиск" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
