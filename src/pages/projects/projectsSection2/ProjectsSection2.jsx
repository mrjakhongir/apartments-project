import { useState } from "react"
import { useSelector } from "react-redux"
import "./projectsSection2.scss"
import Project from "./Project"
import Pagination from "../../../components/pagination/Pagination"

export const ProjectsSection2 = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { filterData } = useSelector((state) => state.filterData)
  const projectsPerPage = 5
  const lastIndex = currentPage * projectsPerPage
  const firstIndex = lastIndex - projectsPerPage
  const totalPages = Math.ceil(filterData.length / projectsPerPage)

  const currentPageProjects = filterData.slice(firstIndex, lastIndex)

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
