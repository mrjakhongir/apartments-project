import { useState } from "react"
import { Link } from "react-router-dom"
import "./projectsSection2.scss"
import allProjects from "../../../assets/data.json"

export const ProjectsSection2 = () => {
  const [extendContent, setExtendContent] = useState(false)

  return (
    <section className="project-section2">
      <div className="wrapper">
        {allProjects.projects.map((project, index) => (
          <div key={index} className="projects-row flex">
            <Link to={`/projects/${project.projectId}`}>
              <img
                src={project.projectImgUrl[0]}
                alt={`project ${project.projectId}`}
              />
            </Link>

            <div className="projects-content">
              <Link to={`/projects/${project.projectId}`}>
                <h2>{project.projectArea}</h2>
              </Link>
              <p>
                Статус: <span>{project.projectStatus}</span>
              </p>
              <p>
                Тип: <span>{project.projectType}</span>
              </p>
              <p>
                Примечание: <span>{project.projectNote}</span>
              </p>
              <div
                className={`table-content ${
                  extendContent && "extended-content"
                }`}
              >
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
                    {project.projects.map((item, index) => (
                      <tr key={index}>
                        <td>{item.type}</td>
                        <td>{item.bedroom}</td>
                        <td>{item.area} m2</td>
                        <td>{item.yard} m2</td>
                        <td>€{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {project.projects.length > 4 ? (
                <button
                  onClick={() => setExtendContent((prevState) => !prevState)}
                  className="btn extend-btn"
                >
                  {extendContent ? "Завернуть" : "Развернуть"}
                </button>
              ) : null}
            </div>
          </div>
        ))}
        <div className="projects-pagination">
          <button className="caret-left"></button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button className="caret-right"></button>
        </div>
      </div>
    </section>
  )
}
