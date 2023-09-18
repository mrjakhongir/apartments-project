import { useState, useEffect } from "react"
import "./projectsSection2.scss"
import allProjects from "../../../assets/data.json"
import Project from "./Project"
import Pagination from "../../../components/pagination/Pagination"

export const ProjectsSection2 = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 5
  const lastIndex = currentPage * projectsPerPage
  const firstIndex = lastIndex - projectsPerPage
  const currentPageProjects = allProjects.projects.slice(firstIndex, lastIndex)
  const totalPages = Math.ceil(allProjects.projects.length / projectsPerPage)

  function goToPrevPage() {
    if (currentPage !== 1) {
      setCurrentPage((prevState) => prevState - 1)
    }
  }

  function goToNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage((prevState) => prevState + 1)
    }
  }

  useEffect(() => {
    window.scrollTo(400, 400)
  }, [currentPage])

  return (
    <section className="project-section2">
      <div className="wrapper">
        {currentPageProjects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
        <div className="projects-pagination">
          <button onClick={goToPrevPage} className="caret">
            &lt;
          </button>
          <Pagination
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            currentPage={currentPage}
          />
          <button onClick={goToNextPage} className="caret">
            &gt;
          </button>
        </div>
      </div>
    </section>
  )
}
