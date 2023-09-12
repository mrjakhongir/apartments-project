import { useParams } from 'react-router-dom'
import { pngs } from '../../constants/images'
import data from '../../assets/data.json'
function ProjectsDetail() {
  const { id } = useParams()

  console.log(id, data)
  return (
    <div>
      <div className="projects-allery">
        <img src={pngs.project1} alt="" />
      </div>
    </div>
  )
}

export default ProjectsDetail
