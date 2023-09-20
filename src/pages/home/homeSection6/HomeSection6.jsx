import React from 'react'
import './homeSection6.scss'
import {Link} from 'react-router-dom'

export const HomeSection6 = () => {
  return (
    <section className="home__section6">
      <div className="wrapper">
        <h2>Вид на жительство на Кипре</h2>
        <p>
          Мы оказываем помощь в получении постоянного места жительства и вида на
          жительство: юридически сопровождаем подготовку и подачу документов для
          получения постоянного места жительства по программе ускоренного
          получения гражданства.
        </p>
        <Link to='/about'>
        <button className="btn">Подробнее</button>
        </Link>
      </div>
    </section>
  )
}
