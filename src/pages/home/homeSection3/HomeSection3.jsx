import { motion } from "framer-motion"
import "./homeSection3.scss"

const HomeSection3 = () => {
  return (
    <>
      <div className="sectio3-top">
        <h2>О Reiwa</h2>
      </div>
      <section className="home__section3">
        <div className="wrapper">
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.3 }}
            className="home__about-description_content"
          >
            <h2>Reiwa</h2>
            <p>
              Мы предоставляем широкий спектр услуг, которые помогут вам стать
              законным обладателем роскошной недвижимости на Средиземноморском
              побережье, а также обезопасить ваши инвестиции и получить доступ к
              международной финансовой системе. Будучи ведущим Real-estate
              агентством и самостоятельным девелопером на острове, группа
              компаний Reiwa насчитывает 20-летний опыт работы в сфере
              консалтинга и недвижимости на Кипре.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default HomeSection3
