import { useState } from 'react';
import { useParams } from 'react-router-dom';
import allProjects from '../../../assets/data.json';
import './projectDetails.scss';

import Footer from '../../../components/footer/Footer';
import House from './House';
import Slider from '../../../components/slider2/Slider';
import HomeFooter from '../../../components/homeFooter/HomeFooter';

function ProjectDetails() {
  const { id } = useParams();
  const [showDetails, setShowDetails] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
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
      <Slider imgs={data.projectImgUrl} />
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
            <p>Примечание.</p>
          </div>
          <p className='project-description'>
            {data.projectDescription[0]?.textContent}
          </p>
          {showDescription && (
            <div className='project-description'>
              {data.projectDescription?.map((item) =>
                item.textType === 'paragraph' ? (
                  <p style={{ marginBottom: '1rem' }}>{item.textContent}</p>
                ) : item.textType === 'paragraphBold' ? (
                  <p>
                    <b>{item.textContent}</b>
                  </p>
                ) : item.textType === 'list' ? (
                  <ul style={{ listStyle: 'disc' }}>
                    {item.textContent.map((li) => (
                      <li style={{ margin: '0 0 0.2rem 3rem' }}>{li}</li>
                    ))}
                  </ul>
                ) : (
                  ''
                )
              )}
            </div>
          )}
          <button
            onClick={() => setShowDescription((prevState) => !prevState)}
            className='btn'
          >
            {showDescription ? 'Свернуть' : 'Подробнее'}
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
            {showDetails ? 'Свернуть' : 'Развернуть'}
          </button>
        </div>
      </div>
      <div className='appliaction'>
        <h2>Оставьте заявку</h2>
        <a
          target='blank'
          href='https://docs.google.com/forms/d/e/1FAIpQLSekfPQqRMG4Gc91fBNs_r6Pex3x2ZBOnCwXBJgqO9WcEQ0Jwg/viewform?pli=1'
        >
          Заполнить
        </a>
      </div>
      <div className='projects-footer'>
        <div className='projects-footer--desktop'>
          <Footer bgColor='#fff' />
        </div>
        <div className='projects-footer--mobile'>
          <HomeFooter bgColor='#3D6CBB1A' />
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
