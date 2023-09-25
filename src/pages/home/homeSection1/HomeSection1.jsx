import Filter from "../../../components/filter/Filter"
import { motion } from "framer-motion"
import "./homeSection1.scss"

const HomeSection1 = () => {
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
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.5 }}
        >
          <Filter />
        </motion.div>
      </div>
    </section>
  )
}
export default HomeSection1
