import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Project = ({ project }) => {
  const [extendContent, setExtendContent] = useState(false)

  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.3 }}
      className="projects-row flex"
    >
      <div>
        <Link
          to={`${
            project.projectId === 4
              ? "https://www.fayno-reiwa.com/"
              : `/projects/${project.projectId}`
          }`}
        >
          <img src={project.projectImgUrl[0]} alt="project" />
        </Link>
      </div>
      <div className="projects-content">
        <Link
          to={`${
            project.projectId === 4
              ? "https://www.fayno-reiwa.com/"
              : `/projects/${project.projectId}`
          }`}
        >
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
        <div className={`table-content ${extendContent && "extended-content"}`}>
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
                  <td>
                    €
                    {item.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {project.projects?.length > 4 ? (
          <button
            onClick={() => setExtendContent((prevState) => !prevState)}
            className="btn extend-btn"
          >
            {extendContent ? "Завернуть" : "Развернуть"}
          </button>
        ) : null}
      </div>
    </motion.div>
  )
}

export default Project
