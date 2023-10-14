import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Project = ({ project }) => {
  const [extendContent, setExtendContent] = useState(false);
  const [numOfProjects, setnumOfProjects] = useState(2);
  const [numOfProjectsDesk, setNumOfProjectsDesk] = useState(4);

  function handleExtendClick() {
    setExtendContent((prevState) => !prevState);
    if (numOfProjects === 2) {
      setnumOfProjects(project.projects.length);
    } else {
      setnumOfProjects(2);
    }
  }

  function handleExtendClickDesktop() {
    setExtendContent((prevState) => !prevState);
    if (numOfProjectsDesk === 4) {
      setNumOfProjectsDesk(project.projects.length);
    } else {
      setNumOfProjectsDesk(4);
    }
  }

  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.3 }}
      className='project-row'
    >
      <div className='project-image'>
        <Link
          to={`${
            project.projectId === 4
              ? 'https://www.fayno-reiwa.com/'
              : `/projects/${project.projectId}`
          }`}
        >
          <img src={project.projectImgUrl[0]} alt='project' />
        </Link>
        <div className='project-mobile'>
          <Link
            to={`${
              project.projectId === 4
                ? 'https://www.fayno-reiwa.com/'
                : `/projects/${project.projectId}`
            }`}
          >
            <h2>{project.projectArea}</h2>
          </Link>
          <div>
            <p>
              Статус: <span>{project.projectStatus}</span>
            </p>
            <p>
              Тип: <span>{project.projectType}</span>
            </p>
            <p>
              Примечание: <span>{project.projectNote}</span>
            </p>
          </div>
        </div>
      </div>
      <div className='project-content'>
        <div className='project-content-top'>
          <div className='project-title'>
            <Link
              to={`${
                project.projectId === 4
                  ? 'https://www.fayno-reiwa.com/'
                  : `/projects/${project.projectId}`
              }`}
            >
              <h2>{project.projectArea}</h2>
            </Link>
          </div>
          <div className='project-description'>
            <p>
              Статус: <span>{project.projectStatus}</span>
            </p>
            <p>
              Тип: <span>{project.projectType}</span>
            </p>
            <p>
              Примечание: <span>{project.projectNote}</span>
            </p>
          </div>
          <Link
            to={`${
              project.projectId === 4
                ? 'https://www.fayno-reiwa.com/'
                : `/projects/${project.projectId}`
            }`}
            className='project-btn'
          >
            Смотреть
          </Link>
        </div>
        <div className='projects-content-bottom'>
          <div className={`table-content`}>
            <div className='table-desktop'>
              <table>
                <thead>
                  <tr>
                    <th>Тип</th>
                    <th>Спальни</th>
                    <th>Плошадь</th>
                    <th>Участок</th>
                    <th>Цена</th>
                  </tr>
                </thead>
                <tbody>
                  {project.projects
                    .slice(0, numOfProjectsDesk)
                    .map((item, index) => (
                      <tr key={index}>
                        <td>{item.type}</td>
                        <td>{item.bedroom}</td>
                        <td>{item.area} m2</td>
                        <td>{item.yard} m2</td>
                        <td>
                          €
                          {item.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div className='table-mobile'>
              {project.projects.slice(0, numOfProjects).map((item, index) => (
                <motion.div
                  whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                  transition={{ duration: 0.3 }}
                  key={index}
                >
                  <table>
                    <tbody>
                      <tr>
                        <th>Тип</th>
                        <td>{item.type}</td>
                      </tr>
                      <tr>
                        <th>Спальни</th>
                        <td>{item.bedroom}</td>
                      </tr>
                      <tr>
                        <th>Плошадь</th>
                        <td>{item.area} m2</td>
                      </tr>
                      <tr>
                        <th>Участок</th>
                        <td>{item.yard} m2</td>
                      </tr>
                      <tr>
                        <th className='price'>Цена</th>
                        <td className='price-value'>
                          €
                          {item.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </motion.div>
              ))}
            </div>
          </div>
          <div className='project-btns'>
            {project.projects.length >= numOfProjects && (
              <button
                onClick={handleExtendClick}
                className='btn extend-btn extend-btn-mobile'
              >
                {extendContent ? 'Завернуть' : 'Развернуть'}
              </button>
            )}
            {project.projects.length > 4 && (
              <button
                onClick={handleExtendClickDesktop}
                className='btn extend-btn extend-btn-desktop'
              >
                {extendContent ? 'Завернуть' : 'Развернуть'}
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
