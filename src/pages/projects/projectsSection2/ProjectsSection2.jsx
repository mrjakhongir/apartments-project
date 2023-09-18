import { useState } from "react"
import "./projectsSection2.scss"
import allProjects from "../../../assets/data.json"
import Project from "./Project"
import Pagination from "../../../components/pagination/Pagination"

export const ProjectsSection2 = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [projectsPerPage, setProjectsPerPage] = useState(5)
  const lastIndex = currentPage * projectsPerPage
  const firstIndex = lastIndex - projectsPerPage
  const currentPageProjects = allProjects.projects.slice(firstIndex, lastIndex)
  const totalPages = Math.ceil(allProjects.projects.length / projectsPerPage)

  function goToPrevPage() {
    if (currentPage > 0) setCurrentPage((prevState) => prevState - 1)
  }

  function goToNextPage() {
    if (currentPage < totalPages) setCurrentPage((prevState) => prevState + 1)
  }

  return (
    <section className="project-section2">
      <div className="wrapper">
        {currentPageProjects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
        <div className="projects-pagination">
          <button onClick={goToPrevPage} className="caret-left"></button>
          <Pagination
            setCurrentPage={setCurrentPage}
            projectsPerPage={projectsPerPage}
            totalPages={totalPages}
            currentPage={currentPage}
          />
          <button onClick={goToNextPage} className="caret-right"></button>
        </div>
      </div>
    </section>
  )
}
