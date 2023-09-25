import { motion } from "framer-motion"
import "./about-section7.scss"

export default function AboutSection7() {
  return (
    <section className="about-section7">
      <div className="about-section7_banner">
        <div className="wrapper">
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="about-header">Достопримечательности</h2>
          </motion.div>
        </div>
      </div>
      <div className="about-section7_description">
        <div className="wrapper">
          <p>
            <b>Кипр</b> – самый восточный остров в Средиземном море и
            независимое государство с богатейшим историческим наследием.
            Благодаря умеренному климату, прекрасным пляжам, гористым лесам и
            живописным зеленым долинам, Кипр становится идеальным уголком для
            отдыха.
          </p>
          <p>
            Любители истории, несомненно, оценят богатство древних памятников.
            Остров буквально усеян археологическими находками, развалинами и
            следами древних империй, завоевателей и цивилизаций.
          </p>
          <p>Среди главных достопримечательностей Кипра:</p>
          <ul>
            <li>Могилы Королей</li>
            <li>Бухта Афродиты</li>
            <li>Купель Афродиты</li>
            <li>Голубая лагуна</li>
            <li>Древний Курион</li>
            <li>Соленое озеро с розовыми фламинго</li>
          </ul>
          <p>
            И многие другие, о которых мы будем рассказывать на нашей страничке
            Новости
          </p>
        </div>
      </div>
    </section>
  )
}
