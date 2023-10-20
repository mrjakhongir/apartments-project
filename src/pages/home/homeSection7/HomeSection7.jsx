import { motion } from "framer-motion"
import { useSearchParams, Link } from "react-router-dom"
import "./homeSection7.scss"

import { pngs } from "../../../constants/images"
import allProjectsData from "../../../assets/data.json"
import Card from "./Card"

export const HomeSection7 = () => {
  const [searchParams, setSearchparams] = useSearchParams()
  const typeFilter = searchParams.get("type") || "частная"
  const projects = allProjectsData.projects
  const filteredData =
    typeFilter && typeFilter !== "все"
      ? projects.filter(
          (house) => house.projectType.toLowerCase() === typeFilter
        )
      : projects

  return (
    <section className='home__section7'>
      <div className='wrapper'>
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.3 }}
        >
          <h1>Наши проекты</h1>
          <div className='section7-navigation flex'>
            <button
              className={`filter-btn ${
                typeFilter === 'частная' ? 'selected' : ''
              }`}
              onClick={() => setSearchparams({ type: 'частная' })}
            >
              Частные
            </button>
            <button
              className={`filter-btn ${
                typeFilter === 'коммерческая' ? 'selected' : ''
              }`}
              onClick={() => setSearchparams({ type: 'коммерческая' })}
            >
              Коммерческие
            </button>
            <button
              className={`filter-btn ${
                typeFilter === 'инвестиционная' ? 'selected' : ''
              }`}
              onClick={() => setSearchparams({ type: 'инвестиционная' })}
            >
              Инвестиционные
            </button>
            <Link to='/projects' className='filter-btn filter-all'>
              Смотреть все проекты
            </Link>
          </div>
          <div className='home__section7-projects'>
            {filteredData.length ? (
              filteredData.slice(0, 4).map((house, index) => (
                <motion.div
                  whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                  transition={{ duration: 0.3 }}
                  key={index}
                  
                >
                  <Card house={house} />
                </motion.div>
              ))
            ) : (
              <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.3 }}
                className='card-not-found'
              >
                <h2>No Projects found</h2>
                <img src={pngs.notFound} alt='not found' />
              </motion.div>
            )}
          </div>
          <Link to='/projects' className='filter-btn filter-all--mobile '>
            Смотреть все проекты
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
