import React from 'react';
import { Link } from 'react-router-dom';
import { svgs } from '../../constants/images';
import './footer.scss';

function Footer({ bgColor }) {
  return (
    <section style={{ backgroundColor: bgColor }} className='footer1'>
      <div className='wrapper'>
        <div className='footer__inner flex'>
          <div>
            <h3 className='footer__title'>Наши соц. сети</h3>
            <div className='footer__social-medias flex'>
              <a href='https://www.instagram.com/reiwagroup_cy/'>
                <img src={svgs.linkedinSquare} alt='' />
              </a>
              <a href='https://t.me/reiwagroup_cy'>
                <img src={svgs.telegramSquare} alt='' />
              </a>
              <a href='https://www.facebook.com/profile.php?id=61551789941776'>
                <img src={svgs.facebookSquare} alt='' />
              </a>
            </div>
          </div>
          <div className='footer__navigation'>
            <h3 className='footer__title'>Навигация по сайту</h3>
            <div className='navigation flex'>
              <div>
                <Link to='/'>Главная</Link>
                <Link to='/projects'>Проекты</Link>
                <Link to='/purchase'>Покупка</Link>
              </div>
              <div>
                <Link to='/about'>О Kипре</Link>
                <Link to='/news'>Новости</Link>
              </div>
            </div>
          </div>
          <div className='footer__contacts'>
            <h3 className='footer__title'>Контакты</h3>
            <div>
              <a href='tel: +998 90 039 88 68'>+998 90 039 88 68</a>
              <a href='mailto: infouz@reiwa-invest.com'>
                infouz@reiwa-invest.com
              </a>
              <a href='map'>
                Address: 59, Office 01,<br></br> Ellados Leoforos,<br></br>{' '}
                Pafos, 8020
              </a>
            </div>
          </div>
          <div className='footer__consult'>
            <h3 className='footer__title'>Бесплатная консультация</h3>
            <a
              target='blank'
              href='https://docs.google.com/forms/d/e/1FAIpQLSekfPQqRMG4Gc91fBNs_r6Pex3x2ZBOnCwXBJgqO9WcEQ0Jwg/viewform?pli=1'
              className='btn'
            >
              Оставить заявку
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
