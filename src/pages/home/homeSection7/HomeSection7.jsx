import { motion } from "framer-motion"
import { useSearchParams, Link } from "react-router-dom"
import "./homeSection7.scss"
import { svgs } from "../../../constants/images"
import { pngs } from "../../../constants/images"
import allProjectsData from "../../../assets/data.json"

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
    <section className="home__section7">
      <div className="wrapper">
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.3 }}
        >
          <h1>Наши проекты</h1>
          <div className="section7-navigation flex">
            <button
              className={`filter-btn ${
                typeFilter === "частная" ? "selected" : ""
              }`}
              onClick={() => setSearchparams({ type: "частная" })}
            >
              Частные
            </button>
            <button
              className={`filter-btn ${
                typeFilter === "коммерческие" ? "selected" : ""
              }`}
              onClick={() => setSearchparams({ type: "коммерческая" })}
            >
              Коммерческие
            </button>
            <button
              className={`filter-btn ${
                typeFilter === "инвестиционные" ? "selected" : ""
              }`}
              onClick={() => setSearchparams({ type: "инвестиционная" })}
            >
              Инвестиционные
            </button>
            <Link to="/projects" className="filter-btn">
              Смотреть все проекты
            </Link>
          </div>
          <div className="home__section7-projects">
            {filteredData.length ? (
              filteredData.map((house, index) => (
                <motion.div
                  whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                  transition={{ duration: 0.3 }}
                  key={index}
                  className="house-card"
                >
                  <div className="card-header">
                    <img src={house.projectImgUrl[0]} alt="" />
                    <p className="house-index">{house.projectIndex}</p>
                  </div>
                  <div className="card-content">
                    <h3>{house.projectArea}</h3>
                    <div>
                      <div>
                        <img
                          style={{ width: "14px" }}
                          src={svgs.bedIcon}
                          alt=""
                        />
                        <span>от 1-х комнат</span>
                      </div>
                      <div>
                        <img
                          style={{ width: "14px" }}
                          src={svgs.sofaIcon}
                          alt=""
                        />
                        <span>от 93 m2</span>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <Link
                      to={`${
                        house.projectId === 4
                          ? "https://www.fayno-reiwa.com/"
                          : `/projects/${house.projectId}`
                      }`}
                    >
                      Подробнее
                    </Link>
                    <span>€ 450000</span>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
                transition={{ duration: 0.3 }}
                className="card-not-found"
              >
                <h2>No Projects found</h2>
                <img src={pngs.notFound} alt="not found" />
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
