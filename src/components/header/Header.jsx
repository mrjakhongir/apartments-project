import React, { useState } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectType } from '../../redux/typeSlice';
import { selectRegion } from '../../redux/regionSlice';
import { selectRoomFrom } from '../../redux/roomFromSlice';
import { selectRoomTo } from '../../redux/roomToSlice';
import { selectPriceFrom } from '../../redux/priceFromSlice';
import { selectPriceTo } from '../../redux/priceToSlice';
import { filterData } from '../../redux/filteredDateSlice';

import { svgs } from '../../constants/images';
import allProjects from '../../assets/data.json';
import './header.scss';

function Header() {
  const linksArr = ['', 'projects', 'purchase', 'about', 'news'];

  const navigation = useNavigate();
  const location = useLocation().pathname;
  const dispatch = useDispatch();

  const [showNav, setShowNav] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const [typeOpen, setTypeOpen] = useState(false);
  const { type } = useSelector((state) => state.type);
  function handleType(item) {
    setTypeOpen((prevState) => !prevState);
    dispatch(selectType(item));
  }

  const [regionOpen, setRegionOpen] = useState(false);
  const { region } = useSelector((state) => state.region);
  function handleRegion(item) {
    setRegionOpen((prevState) => !prevState);
    dispatch(selectRegion(item));
  }

  const [roomFromOpen, setRoomFromOpen] = useState(false);
  const { roomFrom } = useSelector((state) => state.roomFrom);
  function handleRoomFrom(item) {
    setRoomFromOpen((prevState) => !prevState);
    dispatch(selectRoomFrom(item));
  }

  const [roomToOpen, setRoomToOpen] = useState(false);
  const { roomTo } = useSelector((state) => state.roomTo);
  function handleRoomTo(item) {
    setRoomToOpen((prevState) => !prevState);
    dispatch(selectRoomTo(item));
  }

  const [priceFromOpen, setPriceFromOpen] = useState(false);
  const { priceFrom } = useSelector((state) => state.priceFrom);
  function handlePriceFrom(item) {
    let value;
    if (typeof item === 'string') {
      value = item;
    } else {
      value = `€ ${item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`;
    }
    dispatch(selectPriceFrom(value));
    setPriceFromOpen((prevState) => !prevState);
  }

  const [priceToOpen, setPriceToOpen] = useState(false);
  const { priceTo } = useSelector((state) => state.priceTo);
  function handlePriceTo(item) {
    let value;
    if (typeof item === 'string') {
      value = item;
    } else {
      value = `€ ${item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`;
    }
    dispatch(selectPriceTo(value));
    setPriceToOpen((prevState) => !prevState);
  }

  function handleClick(index) {
    navigation(linksArr[index]);
    setShowNav(false);
  }

  const data = allProjects.projects;
  const typeFilter = data.filter((project) => project.projectType === type);
  const regionFilter = typeFilter.length
    ? typeFilter.filter((project) => project.region === region)
    : data.filter((project) => project.region === region);

  const filterProject = regionFilter.length
    ? regionFilter
    : typeFilter.length
    ? typeFilter
    : data;

  function handleSearch() {
    setShowFilters(false);
    dispatch(filterData(filterProject));
    if (location === '/') {
      navigation('/projects');
    }
  }
  return (
    <div className='header'>
      <div className='wrapper'>
        <div className='header-desktop'>
          <Link to='/' className='header__logo'>
            <img src={svgs.logoDark} alt='logo' />
          </Link>
          <nav className='header__navigation'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'active-link' : 'nav-link'
              }
            >
              <span>Главная</span>
            </NavLink>
            <NavLink
              to='projects'
              className={({ isActive }) =>
                isActive ? 'active-link' : 'nav-link'
              }
            >
              <span>Проекты</span>
            </NavLink>
            <NavLink
              to='news'
              className={({ isActive }) =>
                isActive ? 'active-link' : 'nav-link'
              }
            >
              <span>Новости</span>
            </NavLink>
            <NavLink
              to='about'
              className={({ isActive }) =>
                isActive ? 'active-link' : 'nav-link'
              }
            >
              <span>О Кипре</span>
            </NavLink>
            <NavLink
              to='purchase'
              className={({ isActive }) =>
                isActive ? 'active-link' : 'nav-link'
              }
            >
              <span>Покупка</span>
            </NavLink>
          </nav>
        </div>

        <div className='header-mobile'>
          <div onClick={() => setShowNav(true)} className='hamburger'>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='header-mobile--logo'>
            <img src={svgs.logoDark} alt='' />
          </div>
          <button
            onClick={() => setShowFilters(true)}
            className='header-search-btn'
          >
            Поиск
          </button>
          <div className={`header-mobile-left ${showNav && 'show-nav'}`}>
            <div className='left-top'>
              <img src={svgs.logoDark} alt='logo' />
              <img
                onClick={() => setShowNav(false)}
                src={svgs.exitIcon}
                alt='exit'
              />
            </div>
            <div className='left-middle'>
              {['Главная', 'проекты', 'покупка', 'о кипре', 'новости'].map(
                (item, index) => (
                  <div key={index} onClick={() => handleClick(index)}>
                    <span>{item}</span>
                    <img src={svgs.linkIcon} alt='caret right' />
                  </div>
                )
              )}
            </div>
            <div className='left-bottom'>
              <div>
                <img src={svgs.telegramIcon} alt='' />
                <a href='https://t.me/reiwa_uzb'>@reiwa_uzb</a>
              </div>
              <div>
                <img src={svgs.phoneIcon} alt='' />
                <a href='tel: +998900398868'>+998 90 039 8868</a>
              </div>
              <div>
                <img src={svgs.emailIcon} alt='' />
                <a href='mailto: reiwa@gmail.com'>reiwa@gmail.com</a>
              </div>
            </div>
            <div className='social-icons'>
              <a href='#instagram'>
                <img src={svgs.instagramSquare} alt='instagram' />
              </a>
              <a href='#telegram'>
                <img src={svgs.telegramSquare} alt='telegram' />
              </a>
              <a href='#facebook'>
                <img src={svgs.facebookSquare} alt='facebook' />
              </a>
            </div>
          </div>
          <div
            className={`header-mobile-right ${showFilters && 'show-filters'}`}
          >
            <div className='filter-top'>
              <img
                onClick={() => setShowFilters(false)}
                src={svgs.exitIcon}
                alt=''
              />
              <span>поиск</span>
            </div>
            <div className='filters'>
              <div className='accordion'>
                <div
                  onClick={() => setTypeOpen((prevState) => !prevState)}
                  className='accordion-btn'
                >
                  <div>
                    <h4>Тип</h4>
                    <p>{type}</p>
                  </div>
                  <img src={svgs.caret} alt='caret' />
                </div>
                <div className='accordion-content'>
                  {typeOpen &&
                    [
                      'Все типы',
                      'Частная',
                      'Инвестиционная',
                      'Коммерческая',
                    ].map((item, index) => (
                      <p onClick={() => handleType(item)} key={index}>
                        {item}
                      </p>
                    ))}
                </div>
              </div>
              <div className='accordion'>
                <div
                  onClick={() => setRegionOpen((prevState) => !prevState)}
                  className='accordion-btn'
                >
                  <div>
                    <h4>Регион</h4>
                    <p>{region}</p>
                  </div>
                  <img src={svgs.caret} alt='caret' />
                </div>
                <div className='accordion-content'>
                  {regionOpen &&
                    [
                      'Все регионы',
                      'Никосия',
                      'Лимассол',
                      'Ларнака',
                      'Пафос',
                    ].map((item, index) => (
                      <p onClick={() => handleRegion(item)} key={index}>
                        {item}
                      </p>
                    ))}
                </div>
              </div>

              <div className='double-type__filter'>
                <div className='accordion'>
                  <div
                    onClick={() => setRoomFromOpen((prevState) => !prevState)}
                    className='accordion-btn'
                  >
                    <div>
                      <h4>Комнат от</h4>
                      <p>{roomFrom}</p>
                    </div>
                    <img src={svgs.caret} alt='caret' />
                  </div>
                  <div className='accordion-content'>
                    {roomFromOpen &&
                      ['Все', 1, 2, 3, 4, 5, 6].map((item, index) => (
                        <p onClick={() => handleRoomFrom(item)} key={index}>
                          {item}
                        </p>
                      ))}
                  </div>
                </div>
                <div className='accordion'>
                  <div
                    onClick={() => setRoomToOpen((prevState) => !prevState)}
                    className='accordion-btn'
                  >
                    <div>
                      <h4>До</h4>
                      <p>{roomTo}</p>
                    </div>
                    <img src={svgs.caret} alt='caret' />
                  </div>
                  <div className='accordion-content'>
                    {roomToOpen &&
                      ['Все', 1, 2, 3, 4, 5, 6].map((item, index) => (
                        <p onClick={() => handleRoomTo(item)} key={index}>
                          {item}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
              <div className='double-type__filter'>
                <div className='accordion'>
                  <div
                    onClick={() => setPriceFromOpen((prevState) => !prevState)}
                    className='accordion-btn'
                  >
                    <div>
                      <h4>Цена от</h4>
                      <p>{priceFrom}</p>
                    </div>
                    <img src={svgs.caret} alt='caret' />
                  </div>
                  <div className='accordion-content'>
                    {priceFromOpen &&
                      [
                        'Все',
                        100000,
                        200000,
                        300000,
                        400000,
                        500000,
                        600000,
                        700000,
                        800000,
                        900000,
                      ].map((item, index) => (
                        <p onClick={() => handlePriceFrom(item)} key={index}>
                          {typeof item === 'string'
                            ? item
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
                            : `€ ${item
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`}
                        </p>
                      ))}
                  </div>
                </div>
                <div className='accordion'>
                  <div
                    onClick={() => setPriceToOpen((prevState) => !prevState)}
                    className='accordion-btn'
                  >
                    <div>
                      <h4>До</h4>
                      <p>{priceTo}</p>
                    </div>
                    <img src={svgs.caret} alt='caret' />
                  </div>
                  <div className='accordion-content'>
                    {priceToOpen &&
                      [
                        'Все',
                        100000,
                        200000,
                        300000,
                        400000,
                        500000,
                        600000,
                        700000,
                        800000,
                        900000,
                        1000000,
                      ].map((item, index) => (
                        <p onClick={() => handlePriceTo(item)} key={index}>
                          {typeof item === 'string'
                            ? item
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
                            : `€ ${item
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
              <button onClick={handleSearch}>Поиск</button>
            </div>
            <div className='filters-application'>
              <p>Оставьте заявку и мы подберем для вас лучший вариант </p>
              <a
                target='blank'
                href='https://docs.google.com/forms/d/e/1FAIpQLSekfPQqRMG4Gc91fBNs_r6Pex3x2ZBOnCwXBJgqO9WcEQ0Jwg/viewform?pli=1'
              >
                Заполнить
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
