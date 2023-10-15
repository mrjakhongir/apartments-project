import { motion } from 'framer-motion';
import './purchaseSection4.scss';

export default function PurchaseSection4() {
  return (
    <section className='purchase-section4'>
      <div className='purchase-section4_banner'>
        <div className='wrapper'>
          <motion.div
            whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
            transition={{ duration: 0.3 }}
            className='purchase-section4_card'
          >
            <h2 className='purchase-section4_card_text'>
              Льготная ставка НДС предоставляется при следующих условиях:
            </h2>
            <div>
              <div className='purchase-section4_card_desc'>
                <h6></h6>
                <p>
                  Покупатель должен быть физическим лицом, достигшим 18-летнего
                  возраста.
                </p>
              </div>
              <div className='purchase-section4_card_desc'>
                <h6></h6>
                <p>
                  Покупаемая недвижимость должна являться основным местом
                  проживания заявителя в Республике Кипр (во время его
                  пребывания на Кипре).
                </p>
              </div>
              <div className='purchase-section4_card_desc'>
                <h6></h6>
                <p>
                  У заявителя не должно быть другой недвижимости на Кипре,
                  приобретенной ранее с льготной ставкой НДС.
                </p>
              </div>
              <div className='purchase-section4_card_desc'>
                <h6></h6>
                <p>
                  Недвижимость должна использоваться исключительно для
                  проживания, а не с целью извлечения дохода (например, аренды).
                </p>
              </div>
              <div className='purchase-section4_card_desc'>
                <h6></h6>
                <p>
                  На момент утверждения льготной ставки НДС, недвижимость не
                  должна быть использованной (в ней никто не должен жить,
                  пользоваться водой и электричеством).
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className='purchase-section4_description'>
        <div className='wrapper'>
          <div className='purchase-section4_description_body'>
            <p className='purchase-section4_description_body_desc'>
              Льготная ставка 5% распространяется на первые €350.000 стоимости
              недвижимости, при этом общая ее стоимость не должна превышать
              €475.000. Также льготная ставка распространяется на первые
              130кв.м. площади недвижимости, при этом ее площадь не должна
              превышать 190кв.м.
            </p>
          </div>
          <div className='purchase-section4_description_body2'>
            <h2 className='purchase-section4_description_body_text'>
              Гербовый сбор (Stamp duties)
            </h2>
            <p className='purchase-section4_description_body_desc'>
              Гербовый сбор (госпошлина) - выплачивается в течение 30 дней с
              момента заключения договора на покупку недвижимости. Гербовый сбор
              составляет 0,15% от суммы договора купли-продажи (без учета НДС),
              не превышающей €170.000, и 0,2% от суммы, превышающей €170.000.
              Первые €5.000 Гербовым сбором не облагаются.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
