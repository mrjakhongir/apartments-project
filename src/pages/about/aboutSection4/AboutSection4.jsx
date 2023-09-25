import { motion } from "framer-motion"
import "./about-section4.scss"
import { svgs } from "../../../constants/images"

export default function AboutSection4() {
  return (
    <section className="about-section4">
      <div className="about-section_banner">
        <div className="wrapper">
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="about-header">География Кипра</h2>
          </motion.div>
        </div>
      </div>
      <div className="about-section4_description">
        <div className="wrapper">
          <h2 className="about-subheader">
            Кипр - это островное государство в Средиземном море, расположенное
            на пересечении трех континентов: Азии, Европы и Африки.
          </h2>
          <p>
            Остров имеет площадь 5895 км², что делает его третьим по величине в
            этом регионе. Его длина составляет 225 км с востока на запад, а
            ширина варьируется от 94 км до самой широкой части. Протяженность
            береговой линии составляет 853 км.
          </p>
          <p>
            Столицей Кипра является Никосия, важные города острова - Лимассол,
            Пафос, Ларнака и Фамагуста.
          </p>
          <p>
            Территория Кипра разделена на южную греческую и северную турецкую
            часть. Греческий Кипр составляет около 60% южной части острова и с
            2004 года является членом Европейского союза. Турецкая Республика
            Северного Кипра, признанная только Турцией и Азербайджаном,
            управляет оставшейся частью, которая составляет около 36%
            территории.
          </p>
        </div>
      </div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.3 }}
        className="about-section4_illustration"
      >
        <div className="wrapper">
          <div>
            <img src={svgs.aboutWorld} alt="" />
            <p>Страна-участник Евросоюза</p>
          </div>
          <div>
            <img src={svgs.aboutSun} alt="" />
            <p>Самый солнечный остров в Европе</p>
          </div>
          <div>
            <img src={svgs.aboutMountain} alt="" />
            <p>
              Уникальное географическое разнообразие: от песчаных пляжей горных
              горных вершин
            </p>
          </div>
          <div>
            <img src={svgs.aboutCompass} alt="" />
            <p>Удобная отправная точка для путешествий и бизнеса</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
