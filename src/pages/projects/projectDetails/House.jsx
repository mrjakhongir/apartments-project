import { useState } from 'react';
import { motion } from 'framer-motion';

const House = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);
  function showHouseDetails() {
    setShowDetails((prevState) => !prevState);
  }

  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.3 }}
      className='house'
    >
      <div className='house-desktop'>
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
          <button onClick={() => showHouseDetails()} className='btn'>
            {showDetails ? 'Свернуть' : 'Подробнее'}
          </button>
        </div>
        <div
          className={`accordion-bottom ${
            showDetails ? 'accordion-bottom-open' : ''
          }`}
        >
          <div>
            <p>Заполните форму и мы отправим вам всю информацию</p>
            <a
              href='https://docs.google.com/forms/d/e/1FAIpQLSekfPQqRMG4Gc91fBNs_r6Pex3x2ZBOnCwXBJgqO9WcEQ0Jwg/viewform?pli=1'
              target={'blank'}
              className='btn'
            >
              Заполнить
            </a>
          </div>
        </div>
      </div>
      <div className='house-mobile'>
        <table>
          <tbody>
            <tr>
              <th>Тип</th>
              <td>{project.type}</td>
            </tr>
            <tr>
              <th>Спальни</th>
              <td>{project.bedroom}</td>
            </tr>
            <tr>
              <th>Площадь</th>
              <td>{project.area} m2</td>
            </tr>
            <tr>
              <th className='yard'>Участок</th>
              <td>{project.yard} m2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default House;
