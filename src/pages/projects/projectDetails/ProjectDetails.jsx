import React from "react"
import { useParams } from "react-router-dom"
import data from "../../../assets/data.json"
import "./projectDetails.scss"
import { ImageSlider } from "../../../components/slider/ImageSlider"

function ProjectDetails() {
  const { id } = useParams()

  const filteredData = data.projects.filter(
    (project) => project.projectId === parseInt(id)
  )

  return (
    <section className="project-details">
      <ImageSlider slides={filteredData[0].projectImgUrl} />
    </section>
  )
}

export default ProjectDetails
