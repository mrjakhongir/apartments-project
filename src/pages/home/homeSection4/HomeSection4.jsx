import React from 'react'
import './homeSection4.scss'
import { svgs } from '../../../constants/images'

export const HomeSection4 = () => {
  return (
    <section className="home__section4">
      <div className="wrapper">
        <h1 className="service__title">Наши услуги</h1>
        <div className="flex-c">
          <div className="service-row1 flex">
            <img src={svgs.diplomat} alt="" />
            <img src={svgs.line} alt="" />
            <img src={svgs.clinicalNotes} alt="" />
            <img src={svgs.line} alt="" />
            <img src={svgs.savings} alt="" />
          </div>
          <div className="service-row2 flex">
            <div>
              <h3>Для бизнеса</h3>
              <p>
                Регистрация бизнеса Релокация компаний Оформление IP-box для IT
                компаний Коммерческие объекты и офисы Открытие банковского счета
              </p>
            </div>
            <div>
              <h3>Вид на жительство</h3>
              <p>
                Выбор программы Юридическая поддержка Подбор объекта инвестиций
                Консультация на всех этапах
              </p>
            </div>
            <div>
              <h3>Инвестиционные проекты</h3>
              <p>
                Оценка недвижимости Управление проектами Земельные участки под
                застройку Инвестиционные предложения Разработка бизнес-планов
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
