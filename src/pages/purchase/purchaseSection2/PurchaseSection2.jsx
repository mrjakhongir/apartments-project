import { motion } from "framer-motion"
import "./purchaseSection2.scss"

export default function PurchaseSection2() {
  return (
    <section className="purchase-section2">
      <div className="purchase-section2_banner">
        <div className="wrapper">
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.3 }}
            className="purchase-section2_card"
          >
            <h2 className="purchase-section2_card_text">
              Процесс покупки включает в себя ряд обязательных этапов:
            </h2>
            <div>
              <div className="purchase-section2_card_desc">
                <h6></h6>
                <p>Поиск и выбор подходящего объекта недвижимости;</p>
              </div>
              <div className="purchase-section2_card_desc">
                <h6></h6>
                <p>Проведение осмотра и проверка состояния имущества;</p>
              </div>
              <div className="purchase-section2_card_desc">
                <h6></h6>
                <p>Выбор юриста и подготовка необходимых документов;</p>
              </div>
              <div className="purchase-section2_card_desc">
                <h6></h6>
                <p>Оформление договора и оплата задатка;</p>
              </div>
              <div className="purchase-section2_card_desc">
                <h6></h6>
                <p>
                  Оплата гербового сбора и депонирование договора в Земельном
                  комитете;
                </p>
              </div>
              <div className="purchase-section2_card_desc">
                <h6></h6>
                <p>Оплата части либо полной стоимости объекта с НДС;</p>
              </div>
              <div className="purchase-section2_card_desc">
                <h6></h6>
                <p>Покупатель вступает во владение недвижимостью;</p>
              </div>
              <div className="purchase-section2_card_desc">
                <h6></h6>
                <p>Получение Свидетельства о собственности (Title Deed);</p>
              </div>
              <div className="purchase-section2_card_desc">
                <h6></h6>
                <p>
                  После получения свидетельства покупатель становится
                  зарегистрированным собственником жилья.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.3 }}
        className="purchase-section2_description"
      >
        <div className="wrapper">
          <div className="purchase-section2_description_body">
            <h2 className="purchase-section2_description_body_text">
              По прибытию
            </h2>
            <p className="purchase-section2_description_body_desc">
              На Кипре вас ждет встреча с менеджером нашей компании. В процессе
              обсуждения мы проведем детальное обсуждение ваших требований.
              <br />
              <br /> Далее вам будут показаны объекты, которые обсуждались
              ранее. По итогам осмотров мы разработаем дальнейший план действий.
              <br />
              <br /> Если вы абсолютно уверены в своем выборе, мы можем
              ограничиться одним осмотром, и будем готовы перейти к оформлению
              сделки.
            </p>
          </div>
          <div className="purchase-section2_description_body2">
            <h2 className="purchase-section2_description_body_text">
              Оформление сделки купли-продажи недвижимости
            </h2>
            <p className="purchase-section2_description_body_desc">
              Покупка недвижимости – это всегда юридическая процедура, которая
              требует соблюдения условий всеми сторонами сделки.
              <br />
              <br />В случае выбора ипотечного кредитования участником сделки
              становится кипрский банк. На этом этапе мы оказываем помощь и
              содействие в подготовке пакета документов.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
