import React, { useState } from "react"
import { svgs } from "../../../constants/images"

const House = ({ project, index }) => {
  const [showDetails, setShowDetails] = useState(false)
  function showHouseDetails(index) {
    setShowDetails((prevState) => !prevState)
  }
  return (
    <div className="house">
      <div className="flex">
        <div>
          <h2>{project.type}</h2>
          <div className="house-description flex">
            <p>
              Спальни: <span> {project.bedroom}</span>
            </p>
            <p>
              Жилая площадь: <span> {project.area}</span>
            </p>
            <p>
              Участок: <span> {project.yard}</span>
            </p>
          </div>
        </div>
        <div>
          <button onClick={() => showHouseDetails(index)} className="btn">
            {showDetails ? "Свернуть" : "Подробнее"}
          </button>
        </div>
      </div>
      <div className={`accordion ${showDetails ? "accordion-open" : ""}`}>
        <div className="accordion-top flex">
          <div className="accordion-detail">
            <div>
              <p>Внутренняя площадь:</p>
              <p>{project.area}m2</p>
            </div>
            <div>
              <p>Крытая веранда:</p>
              <p>{project.veranda}m2</p>
            </div>
            <div>
              <p>Цена за кв.м:</p>
              <p className="house-price">€{project.pricePerSquareMetre}</p>
            </div>
          </div>
          <div className="house-note">
            <img src={svgs.poolIcon} alt="" />
            <p>Бассейн</p>
          </div>
        </div>
        <div className="accordion-bottom">
          <h4>Заполните форму и мы отправим вам всю информацию</h4>
          <div>
            <button className="btn">Заполнить</button>
            <p>€{project.price}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default House
