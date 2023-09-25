import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import "./homeSection6.scss"

export const HomeSection6 = () => {
  return (
    <section className="home__section6">
      <div className="wrapper">
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.3 }}
        >
          <h2>Вид на жительство на Кипре</h2>
          <p>
            Мы оказываем помощь в получении постоянного места жительства и вида
            на жительство: юридически сопровождаем подготовку и подачу
            документов для получения постоянного места жительства по программе
            ускоренного получения гражданства.
          </p>
          <Link className="btn" to="/about">
            Подробнее
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
