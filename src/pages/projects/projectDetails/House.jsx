import React, { useState } from 'react';


import { motion } from 'framer-motion';

const House = ({ project, index }) => {

  const [showDetails, setShowDetails] = useState(false);
  function showHouseDetails(index) {
    setShowDetails((prevState) => !prevState);
  }

  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.3 }}
      className='house'
    >
      <div className='accordion-top flex'>
        <div>
          <h2>{project.type}</h2>
          <div className='house-description flex'>
            <p>
              Спальни: <span> {project.bedroom}</span>
            </p>
            <p>
              Жилая площадь: <span> {project.area} m2</span>
            </p>
            <p>
              Участок: <span> {project.yard} m2</span>
            </p>
          </div>
        </div>
        <button onClick={() => showHouseDetails(index)} className='btn'>
          {showDetails ? 'Свернуть' : 'Подробнее'}
        </button>
      </div>

      <div
        className={`accordion-middle ${showDetails ? 'accordion-open' : ''}`}
      >
        {/* <div className="accordion-top flex">
          <div className="accordion-detail">
            <div>
              <p>Внутренняя площадь:</p>
              <p>{project.area} m2</p>
            </div>
            <div>
              <p>Крытая веранда:</p>
              <p>{project.veranda} m2</p>
            </div>
            <div>
              <p>Цена за кв.м:</p>
              <p className="house-price">
                €
                {project.pricePerSquareMetre
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
              </p>
            </div>
          </div>
          <div className="house-note">
            <img src={svgs.poolIcon} alt="" />
            <p>Бассейн</p>
          </div>
        </div> */}
        <div className='accordion-bottom'>
          <h4>Заполните форму и мы отправим вам всю информацию</h4>
          <button className='btn'>Заполнить</button>
        </div>
      </div>
    </motion.div>
  );
};

export default House;
