import { motion } from 'framer-motion';
import './homeSection8.scss';
import { svgs } from '../../../constants/images';

export const HomeSection8 = () => {
  return (
    <section className='home__section8'>
      <div className='wrapper'>
        <motion.div
          whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
          transition={{ duration: 0.3 }}
          className='home__contacts'
        >
          <img className='logo-dark' src={svgs.logoDark} alt='reiwa logo' />
          <img className='logo-light' src={svgs.logoLight} alt='reiwa logo' />
          <div>
            <h2>Оставьте заявку</h2>
            <p>И мы ответим на все вопросы</p>
            <a
              target='blank'
              href='https://docs.google.com/forms/d/e/1FAIpQLSekfPQqRMG4Gc91fBNs_r6Pex3x2ZBOnCwXBJgqO9WcEQ0Jwg/viewform?pli=1'
              className='btn'
            >
              Заполнить
            </a>
          </div>
          <div className='contacts-content'>
            <div className='flex'>
              <img src={svgs.phoneIcon} alt='' />
              <span>+998 (90) 039 88 68</span>
            </div>
            <div className='flex'>
              <img src={svgs.telegramIcon} alt='' />
              <span>@reiwa_uzb </span>
            </div>
            <div className='flex'>
              <img src={svgs.emailIcon} alt='' />
              <span>infouz@reiwacy.com </span>
            </div>
          </div>
          <div className='overlay'></div>
        </motion.div>
      </div>
    </section>
  );
};
