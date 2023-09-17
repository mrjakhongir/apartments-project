import Filter from "../../../components/filter/Filter"
import "./homeSection1.scss"

export const HomeSection1 = () => {
  return (
    <section className="welcome">
      <div className="wrapper">
        <h1 className="welcome__title">
          Инвестируйте в свое<br></br> будущее
        </h1>
        <p className="welcome__subtitle">
          Лучшие решения по недвижимости и возможности получения ПМЖ на Кипре
        </p>
        <button className="btn welcome__btn">Оставить заявку</button>
        <Filter />
      </div>
    </section>
  )
}
