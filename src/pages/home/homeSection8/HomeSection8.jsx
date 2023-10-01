import { motion } from "framer-motion"
import "./homeSection8.scss"
import { svgs } from "../../../constants/images"
import { useSelector } from "react-redux"

export const HomeSection8 = () => {
  const { size } = useSelector((state) => state.size)
  return (
    <section className="home__section8">
      <div className="wrapper">
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.3 }}
          className="home__contacts"
        >
          <img
            src={`${size > 375 ? svgs.logoDark : svgs.logoLight}`}
            alt="reiwa logo"
          />
          <div>
            <h2>Оставьте заявку</h2>
            <p>И мы ответим на все вопросы</p>
            <button className="btn">Заполнить</button>
          </div>
          <div className="contacts-content">
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
              <span>infouz@reiwacy.com </span>
            </div>
          </div>
          <div className="overlay"></div>
        </motion.div>
      </div>
    </section>
  )
}
