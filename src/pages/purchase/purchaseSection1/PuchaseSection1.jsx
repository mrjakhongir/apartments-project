import { motion } from "framer-motion"
import "./purchaseSection1.scss"

export default function PurchaseSection1() {
  return (
    <section className="purchase-section1">
      <div className="purchase-section1_banner">
        <div className="wrapper">
          <h1>Покупка и виза</h1>
        </div>
      </div>
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.3 }}
        className="purchase-section1_description"
      >
        <div className="wrapper">
          <h2 className="purchase-subheader">
            Этапы покупки недвижимости на Кипре
          </h2>
          <div className="card">
            <div className="card1_2">
            <div className="card1">
              <h2 className="card_name">1</h2>
              <div className="card_body">
                <h3 className="card_text">Обработка запроса</h3>
                <h6></h6>
                <p>
                  Обсуждение потребностей <br /> Консультация с менеджером{" "}
                  <br /> Выбор объекта <br /> Обсуждение условий
                </p>
              </div>
            </div>
            <div className="card2">
              <h2 className="card_name">2</h2>
              <div className="card_body">
                <h3 className="card_text">Юридическая проверка</h3>
                <h6></h6>
                <p>
                  Выбор юриста <br /> Заключение договора <br /> Проверка права
                  собственности <br /> Подготовка пакета документов
                </p>
              </div>
            </div>
            </div>
            <div className="card3_4">
              <div className="card4">
                <h2 className="card_name">4</h2>
                <div className="card_body">
                  <h3 className="card_text">Оформление сделки</h3>
                  <h6></h6>
                  <p>
                    Проверка документов органами <br /> Подписание договора
                    купли-продажи <br /> Перевод денежных средств <br /> Уплата
                    сопутствующих расходов и налогов
                  </p>
                </div>
              </div>
              <div className="card3">
                <h2 className="card_name">3</h2>
                <div className="card_body">
                  <h3 className="card_text">
                    Регистрация прав собственности (Title Deed)
                  </h3>
                  <h6></h6>
                  <p>
                    Регистрация договора в Земельном Департаменте <br />{" "}
                    Получение разрешения на перевод Титула <br /> Оплата налогов{" "}
                    <br /> Получение Титула
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
