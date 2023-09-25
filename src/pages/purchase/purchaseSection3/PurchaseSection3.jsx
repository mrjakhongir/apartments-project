import { motion } from "framer-motion"
import "./purchaseSection3.scss"

export default function PurchaseSection3() {
  return (
    <section className="purchase-section3">
      <div className="purchase-section3_banner">
        <div className="wrapper">
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="purchase-header">НДС и прочие налоговые сборы</h2>
          </motion.div>
        </div>
      </div>
      <div className="purchase-section3_description">
        <div className="wrapper">
          <div className="purchase-section3_description_body">
            <h2 className="purchase-section3_description_body_text">НДС</h2>
            <p className="purchase-section3_description_body_desc">
              При покупке недвижимости на Кипре действует налог НДС (VAT - Value
              Added Tax). В случае с приобретением вторичной недвижимости сделка
              налогом не облагается.
              <br />
              <br />
              Согласно действующему законодательству, ставка НДС на Кипре
              составляет 19%. Однако, при выполнении определенных условий,
              предусмотрено использование льготной ставки в размере 5%.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
