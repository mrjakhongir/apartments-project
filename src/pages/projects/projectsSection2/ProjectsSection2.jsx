import "./projectsSection2.scss"
import allProjects from "../../../assets/data.json"
import Project from "./Project"

export const ProjectsSection2 = () => {
  return (
    <section className="project-section2">
      <div className="wrapper">
        {allProjects.projects.map((project, index) => (
          <Project key={index} project={project} />
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
