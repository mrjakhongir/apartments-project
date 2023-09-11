import React from 'react'
import './homeSection2.scss'

export const HomeSection2 = () => {
  return (
    <section className="home__section2">
      <div className="flex">
        <div>
          <h1>20+</h1>
          <p>Лет опыта</p>
        </div>
        <div>
          <h1>300+</h1>
          <p>Довольных клиентов</p>
        </div>
        <div>
          <h1>1000+</h1>
          <p>Уникальных предложений</p>
        </div>
        <div>
          <h1>5</h1>
          <p>Личных проектов</p>
        </div>
        <div>
          <h1 className="red__title">50+</h1>
          <p>Партнеров</p>
        </div>
      </div>
    </section>
  )
}
