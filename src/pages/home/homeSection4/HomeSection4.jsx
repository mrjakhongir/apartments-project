import { motion } from 'framer-motion';
import './homeSection4.scss';
import { svgs } from '../../../constants/images';

export const HomeSection4 = () => {
  return (
    <section className='home__section4'>
      <div className='wrapper'>
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.3 }}
        >
          <h1 className='service__title'>Наши услуги</h1>
          <div>
            <div className='service-row1 flex'>
              <img src={svgs.diplomat} alt='' />
              <img src={svgs.line} alt='' />
              <img src={svgs.clinicalNotes} alt='' />
              <img src={svgs.line} alt='' />
              <img src={svgs.savings} alt='' />
            </div>
            <div className='service-row2 flex'>
              <div>
                <img src={svgs.diplomat} alt='' />
                <h3>Для бизнеса</h3>
                <p>
                  Регистрация бизнеса<br></br> Релокация компаний Оформление
                  <br></br> IP-box для IT компаний<br></br> Коммерческие объекты
                  и офисы <br></br>Открытие банковского счета
                </p>
              </div>
              <div>
                <img src={svgs.clinicalNotes} alt='' />
                <h3>Вид на жительство</h3>
                <p>
                  Выбор программы<br></br> Юридическая поддержка<br></br> Подбор
                  объекта инвестиций<br></br>Консультация на всех этапах
                </p>
              </div>
              <div>
                <img src={svgs.savings} alt='' />
                <h3>Инвестиционные проекты</h3>
                <p>
                  Оценка недвижимости<br></br> Управление проектами<br></br>
                  Земельные участки под застройку<br></br> Инвестиционные
                  предложения<br></br> Разработка бизнес-планов
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
