import React from "react"
import { useSearchParams, Link } from "react-router-dom"
import "./homeSection7.scss"
import { pngs } from "../../../constants/images"
import { svgs } from "../../../constants/images"

const projects = [
  {
    houseIndex: "001",
    houseImgUrl: pngs.house1,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Частные",
  },
  {
    houseIndex: "002",
    houseImgUrl: pngs.house2,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Частные",
  },
  {
    houseIndex: "003",
    houseImgUrl: pngs.house3,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Частные",
  },
  {
    houseIndex: "004",
    houseImgUrl: pngs.house4,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Частные",
  },
  {
    houseIndex: "005",
    houseImgUrl: pngs.house1,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Коммерческие",
  },
  {
    houseIndex: "006",
    houseImgUrl: pngs.house2,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Коммерческие",
  },
  {
    houseIndex: "007",
    houseImgUrl: pngs.house3,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Коммерческие",
  },
  {
    houseIndex: "008",
    houseImgUrl: pngs.house4,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Коммерческие",
  },
  {
    houseIndex: "009",
    houseImgUrl: pngs.house1,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Инвестиционные",
  },
  {
    houseIndex: "010",
    houseImgUrl: pngs.house2,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Инвестиционные",
  },
  {
    houseIndex: "011",
    houseImgUrl: pngs.house3,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Инвестиционные",
  },
  {
    houseIndex: "012",
    houseImgUrl: pngs.house4,
    houseName: "Комплекс вилл в деревне Эпископи",
    houseRoomMin: 2,
    houseAreaMin: 150,
    housePrice: "450,000",
    type: "Инвестиционные",
  },
]

export const HomeSection7 = () => {
  const [searchParams, setSearchparams] = useSearchParams()
  const typeFilter = searchParams.get("type") || "частные"
  const filteredData =
    typeFilter && typeFilter !== "все"
      ? projects.filter((house) => house.type.toLowerCase() === typeFilter)
      : projects
  return (
    <section className="home__section7">
      <div className="wrapper">
        <h1>Наши проекты</h1>
        <div className="section7-navigation flex">
          <button
            className={`filter-btn ${
              typeFilter === "частные" ? "selected" : ""
            }`}
            onClick={() => setSearchparams({ type: "частные" })}
          >
            Частные
          </button>
          <button
            className={`filter-btn ${
              typeFilter === "коммерческие" ? "selected" : ""
            }`}
            onClick={() => setSearchparams({ type: "коммерческие" })}
          >
            Коммерческие
          </button>
          <button
            className={`filter-btn ${
              typeFilter === "инвестиционные" ? "selected" : ""
            }`}
            onClick={() => setSearchparams({ type: "инвестиционные" })}
          >
            Инвестиционные
          </button>
          <Link to="/projects" className="filter-btn">
            Смотреть все проекты
          </Link>
        </div>
        <div className="home__section7-projects">
          {filteredData.map((house, index) => (
            <div key={index} className="house-card">
              <div className="card-header">
                <img src={house.houseImgUrl} alt="" />
                <p className="house-index">{house.houseIndex}</p>
              </div>
              <div className="card-content">
                <h3>{house.houseName}</h3>
                <div>
                  <div>
                    <img style={{ width: "14px" }} src={svgs.bedIcon} alt="" />
                    <span>от {house.houseRoomMin}-х комнат</span>
                  </div>
                  <div>
                    <img style={{ width: "14px" }} src={svgs.sofaIcon} alt="" />
                    <span>от {house.houseAreaMin} m2</span>
                  </div>
                </div>
                <div className="card-footer">
                  <button>Подробнее</button>
                  <span>€{house.housePrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
