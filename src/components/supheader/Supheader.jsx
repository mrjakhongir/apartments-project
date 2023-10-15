import './supheader.scss';
import { svgs } from '../../constants/images';

function Supheader() {
  return (
    <div className='supheader'>
      <div className='wrapper'>
        <div className='supheader__inner flex'>
          <div className='supheader__contacts flex'>
            <a href='mailto: infouz@reiwa-invest.com'>
              infouz@reiwa-invest.com
            </a>
            <a href='tel: +998900398868'>+998 90 039 8868</a>
          </div>
          <div className='supheader__right-col flex'>
            <div className='supheader__social-medias flex'>
              <a href='https://www.instagram.com/reiwagroup_cy/'>
                <img src={svgs.instagramIcon} alt='instagram' />
              </a>
              <a href='https://t.me/reiwagroup_cy'>
                <img src={svgs.telegramIconOutlined} alt='telegram' />
              </a>
              <a href='https://www.facebook.com/profile.php?id=61551789941776'>
                <img src={svgs.facebookIcon} alt='facebook' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Supheader;
