import Filter from "../../../components/filter/Filter"
import { motion } from "framer-motion"
import "./homeSection1.scss"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { resize } from "../../../redux/resizeWindow"

const HomeSection1 = () => {
  const { size } = useSelector((state) => state.size)
  const dispatch = useDispatch()
  useEffect(() => {
    window.addEventListener("resize", () => {
      dispatch(resize(window.innerWidth))
    })
  })
  return (
    <section className="welcome">
      <div className="wrapper">
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="welcome__title">
            Инвестируйте в свое<br></br> будущее
          </h1>
          <p className="welcome__subtitle">
            Лучшие решения по недвижимости и возможности получения ПМЖ на Кипре
          </p>
          <button className="btn welcome__btn">Оставить заявку</button>
        </motion.div>
        {size > 375 && (
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.5 }}
          >
            <Filter />
          </motion.div>
        )}
        <div className="welcome-statistics">
          <div>
            <h2>20+</h2>
            <p>Лет опыта</p>
          </div>
          <div>
            <h2>300+</h2>
            <p>Довольных клиентов</p>
          </div>
          <div>
            <h2>1000+</h2>
            <p>Уникальных предложений</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HomeSection1
