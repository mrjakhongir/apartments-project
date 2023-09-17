import React from "react"
import { svgs } from "../../constants/images"
import "./filter.scss"

const Filter = () => {
  return (
    <div className="projects__filters flex">
      <div className="accordion">
        <div className="filter-btn flex">
          <div>
            <h4>Тип</h4>
            <p>Все типы</p>
          </div>
          <img src={svgs.caret} alt="" />
        </div>
      </div>

      <div className="accordion">
        <div className="filter-btn flex">
          <div>
            <h4>Регион</h4>
            <p>Все Регионы</p>
          </div>
          <img src={svgs.caret} alt="caret" />
        </div>
      </div>

      <div className="double-type__filter flex">
        <div className="accordion">
          <div className="filter-btn flex">
            <div>
              <h4>Комнат от</h4>
              <p>Все </p>
            </div>
            <img src={svgs.caret} alt="caret" />
          </div>
        </div>
        <div className="accordion">
          <div className="filter-btn flex">
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
          <div className="filter-btn flex">
            <div>
              <h4>Цена от</h4>
              <p>Все </p>
            </div>
            <img src={svgs.caret} alt="" />
          </div>
        </div>

        <div className="accordion">
          <div className="filter-btn flex">
            <div>
              <h4>До</h4>
              <p>Все </p>
            </div>
            <img src={svgs.caret} alt="" />
          </div>
        </div>
      </div>

      <button className="search-btn">
        <img src={svgs.search} alt="search" />
        <span>Поиск</span>
      </button>
    </div>
  )
}

export default Filter
