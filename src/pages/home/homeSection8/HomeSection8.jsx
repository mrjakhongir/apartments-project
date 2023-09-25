import { motion } from "framer-motion"
import "./homeSection8.scss"
import { svgs } from "../../../constants/images"

export const HomeSection8 = () => {
  return (
    <section className="home__section8">
      <div className="wrapper">
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.3 }}
          className="home__contacts"
        >
          <img src={svgs.logoDark} alt="reiwa logo" />
          <div>
            <h2>Оставьте заявку</h2>
            <p>И мы ответим на все вопросы</p>
            <button className="btn">Заполнить</button>
          </div>
          <div className="contects-content">
            <div className="flex">
              <img src={svgs.phoneIcon} alt="" />
              <span>+998 (90) 039 88 68</span>
            </div>
            <div className="flex">
              <img src={svgs.telegramIcon} alt="" />
              <span>@reiwa_uzb </span>
            </div>
            <div className="flex">
              <img src={svgs.emailIcon} alt="" />
              <span>reiwasmm@gmail.com</span>
            </div>
          </div>
          <div className="overlay"></div>
        </motion.div>
      </div>
    </section>
  )
}
