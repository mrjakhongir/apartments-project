import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { pngs } from '../../constants/images'

function ProjectsDetail() {
  const { id } = useParams()
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('../../data.json')
      .then((res) => res.json())
      .then((data) => console.log(data))
  }, [id])

  return (
    <div>
      <div className="projects-allery">
        <img src={pngs.project1} alt="" />
      </div>
    </div>
  )
}

export default ProjectsDetail
