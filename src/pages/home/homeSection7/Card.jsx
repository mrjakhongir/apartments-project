import { svgs } from '../../../constants/images';
import { Link } from 'react-router-dom';

function Card({ house }) {
  console.log(house);
  return (
    <div className='house-card'>
      <div className='card-header'>
        <img src={house.projectImgUrl[0]} alt='' />
        <p className='house-index'>{house.projectIndex}</p>
      </div>
      <div className='card-content'>
        <h3>{house.projectArea}</h3>
        <div>
          <div>
            <img style={{ width: '14px' }} src={svgs.bedIcon} alt='' />
            <span>от {house.roomFrom}-х комнат</span>
          </div>
          <div>
            <img style={{ width: '14px' }} src={svgs.sofaIcon} alt='' />
            <span>от {house.areaFrom} m2</span>
          </div>
        </div>
      </div>
      <div className='card-footer'>
        <Link
          to={`${
            house.projectId === 4
              ? 'https://www.fayno-reiwa.com/'
              : `/projects/${house.projectId}`
          }`}
        >
          Подробнее
        </Link>
        <span>
          € {house.priceFrom.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
        </span>
      </div>
    </div>
  );
}

export default Card;
