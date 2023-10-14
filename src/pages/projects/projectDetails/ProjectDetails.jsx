import { useState } from 'react';
import { useParams } from 'react-router-dom';
import allProjects from '../../../assets/data.json';
import './projectDetails.scss';

import Footer from '../../../components/footer/Footer';
import House from './House';
import Slider from '../../../components/slider2/Slider';

function ProjectDetails() {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(false);
  const [numOfDetails, setNumOfDetails] = useState(3);

  const filteredData = allProjects.projects.filter(
    (project) => project.projectId === parseInt(id)
  );
  const data = filteredData[0];
  function handleClick() {
    setShowDetails((prevState) => !prevState);
    if (numOfDetails === 3) {
      setNumOfDetails(data.projects.length);
    } else {
      setNumOfDetails(3);
    }
  }
  return (
    <section className='project-details'>
      {/* <Slider /> */}
      <div className='wrapper'>
        <div className='project-details_inner'>
          <h2>{data.projectArea}</h2>
          <div className='project-overview'>
            <p>
              Статус: <span> {data.projectStatus}</span>
            </p>
            <p>
              Тип: <span> {data.projectType}</span>
            </p>
            <p>
              Примечание: <span> {data.projectNote}</span>
            </p>
          </div>
          <p className='project-description'>
            Современный жилой комплекс, состоящий из 10 вилл с тремя спальнями и
            потрясающим видом на горы и море. Все резиденции располагают
            просторными открытыми площадками и крытыми верандами в спокойной
            обстановке, идеально подходящей для воспитания семьи и проведения
            спокойных летних каникул.
          </p>
          {showDetails && (
            <div className='project-description'>
              <p>
                Проект окружен прекрасными пейзажами в одном из самых зеленых
                районов Пафоса и находится всего в 10 минутах езды от центра
                Пафоса и в 2 минутах от одного из лучших полей для гольфа на
                Кипре.
              </p>
              <ul>
                <p>Особенности</p>
                <li>· Система охлаждения по технологии VRV</li>
                <li>· Аварийная система</li>
                <li>· Внешняя теплоизоляция</li>
                <li>· Высококачественные</li>
                <li>· столешницы и отделка</li>
                <li>· Полы с подогревом</li>
                <li>· Частное парковочное место</li>
                <li>· Два этажа</li>
                <li>· Энергосберегающее спроектированное свойство</li>
                <li>· Система напора воды</li>
                <li>· Ламинатные полы в спальнях</li>
                <li>· Энергоэффективный, устойчивый дизайн</li>
                <li>· Частная благоустроенная территория</li>
                <li>· Высококачественная фурнитура по всему периметру</li>
              </ul>
            </div>
          )}
          <button
            onClick={() => setShowDetails((prevState) => !prevState)}
            className='btn'
          >
            {showDetails ? 'Свернут' : 'Подробнее'}
          </button>
        </div>
      </div>
      <div className='house-details'>
        <div className='wrapper'>
          <h2>Площади и цены</h2>
          <div className='houses-container'>
            {data.projects.slice(0, numOfDetails).map((project, index) => (
              <House key={index} project={project} />
            ))}
          </div>
          <button onClick={handleClick} className='btn house-details--btn'>
            {showDetails ? 'Завернут' : 'Развернуть'}
          </button>
        </div>
      </div>
      <Footer bgColor='#fff' />
    </section>
  );
}

export default ProjectDetails;
