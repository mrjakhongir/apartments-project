import { useParams } from "react-router-dom"
import allProjects from "../../../assets/data.json"
import "./projectDetails.scss"

import { ImageSlider } from "../../../components/slider/ImageSlider"
import Footer from "../../../components/footer/Footer"
import House from "./House"

function ProjectDetails() {
  const { id } = useParams()

  const filteredData = allProjects.projects.filter(
    (project) => project.projectId === parseInt(id)
  )
  const data = filteredData[0]

  return (
    <section className="project-details">
      <ImageSlider slides={data.projectImgUrl} />
      <div className="wrapper">
        <h2>{data.projectArea}</h2>
        <div>
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
        <p>
          Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
          сгенерировать несколько абзацев более менее осмысленного текста.
          Вебмастеру сгенерировать несколько абзацев более менее осмысленного
          текста.
        </p>
        <button className="btn">Подробнее</button>
      </div>
      <div className="house-details">
        <div className="wrapper">
          <h2>Площади и цены</h2>

          {data.projects.map((project, index) => (
            <House key={index} project={project} />
          ))}
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default ProjectDetails
