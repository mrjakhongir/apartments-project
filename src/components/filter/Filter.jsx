import { useState } from "react"
import { svgs } from "../../constants/images"
import allProjects from "../../assets/data.json"
import { useLocation, useNavigate } from "react-router-dom"
import "./filter.scss"

import { useSelector, useDispatch } from "react-redux"
import { selectType } from "../../redux/typeSlice"
import { selectRegion } from "../../redux/regionSlice"
import { selectRoomFrom } from "../../redux/roomFromSlice"
import { selectRoomTo } from "../../redux/roomToSlice"
import { selectPriceFrom } from "../../redux/priceFromSlice"
import { selectPriceTo } from "../../redux/priceToSlice"
import { filterData } from "../../redux/filteredDateSlice"

const Filter = () => {
  const { type } = useSelector((state) => state.type)
  const { region } = useSelector((state) => state.region)
  const { roomFrom } = useSelector((state) => state.roomFrom)
  const { roomTo } = useSelector((state) => state.roomTo)
  const { priceFrom } = useSelector((state) => state.priceFrom)
  const { priceTo } = useSelector((state) => state.priceTo)
  const dispatch = useDispatch()

  const [typeOpen, setTypeOpen] = useState(false)
  const [regionOpen, setRegionOpen] = useState(false)
  const [roomFromOpen, setRoomFromOpen] = useState(false)
  const [roomToOpen, setRoomToOpen] = useState(false)
  const [priceFromOpen, setPriceFromOpen] = useState(false)
  const [priceToOpen, setPriceToOpen] = useState(false)
  const location = useLocation().pathname
  const navigate = useNavigate()

  const data = allProjects.projects
  const typeFilter = data.filter((project) => project.projectType === type)
  const regionFilter = typeFilter.length
    ? typeFilter.filter((project) => project.region === region)
    : data.filter((project) => project.region === region)

  const filterProject = regionFilter.length
    ? regionFilter
    : typeFilter.length
    ? typeFilter
    : data

  function filterProjects() {
    dispatch(filterData(filterProject))
    if (location === "/") {
      navigate("/projects")
    }
  }

  function handleType(item) {
    setTypeOpen((prevState) => !prevState)
    dispatch(selectType(item))
  }

  function handleRegion(item) {
    setRegionOpen((prevState) => !prevState)
    dispatch(selectRegion(item))
  }

  function handleRoomFrom(item) {
    setRoomFromOpen((prevState) => !prevState)
    dispatch(selectRoomFrom(item))
  }
  function handleRoomTo(item) {
    setRoomToOpen((prevState) => !prevState)
    dispatch(selectRoomTo(item))
  }
  function handlePriceFrom(item) {
    let value
    if (typeof item === "string") {
      value = item
    } else {
      value = `€ ${item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`
    }
    dispatch(selectPriceFrom(value))
    setPriceFromOpen((prevState) => !prevState)
  }

  function handlePriceTo(item) {
    let value
    if (typeof item === "string") {
      value = item
    } else {
      value = `€ ${item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`
    }
    dispatch(selectPriceTo(value))
    setPriceToOpen((prevState) => !prevState)
  }

  return (
    <div className="projects__filters flex">
      <div className="accordion">
        <div
          onClick={() => setTypeOpen((prevState) => !prevState)}
          className="filter-btn flex"
        >
          <div>
            <h4>Тип</h4>
            <p>{type}</p>
          </div>
          <img src={svgs.caret} alt="" />
        </div>
        <div className="accordion-content">
          {typeOpen &&
            ["Все типы", "Частная", "Инвестиционная", "Коммерческая"].map(
              (item, index) => (
                <p onClick={() => handleType(item)} key={index}>
                  {item}
                </p>
              )
            )}
        </div>
      </div>

      <div className="accordion">
        <div
          onClick={() => setRegionOpen((prevState) => !prevState)}
          className="filter-btn flex"
        >
          <div>
            <h4>Регион</h4>
            <p>{region}</p>
          </div>
          <img src={svgs.caret} alt="caret" />
        </div>
        <div className="accordion-content">
          {regionOpen &&
            ["Все регионы", "Пафос", "Эпископи"].map((item, index) => (
              <p onClick={() => handleRegion(item)} key={index}>
                {item}
              </p>
            ))}
        </div>
      </div>

      <div className="double-type__filter flex">
        <div className="accordion">
          <div
            onClick={() => setRoomFromOpen((prevState) => !prevState)}
            className="filter-btn flex"
          >
            <div>
              <h4>Комнат от</h4>
              <p>{roomFrom} </p>
            </div>
            <img src={svgs.caret} alt="caret" />
          </div>
          <div className="accordion-content">
            {roomFromOpen &&
              ["Все", 1, 2, 3, 4, 5, 6].map((item, index) => (
                <p onClick={() => handleRoomFrom(item)} key={index}>
                  {item}
                </p>
              ))}
          </div>
        </div>
        <div className="accordion">
          <div
            onClick={() => setRoomToOpen((prevState) => !prevState)}
            className="filter-btn flex"
          >
            <div>
              <h4>До</h4>
              <p>{roomTo} </p>
            </div>
            <img src={svgs.caret} alt="caret" />
          </div>
          <div className="accordion-content">
            {roomToOpen &&
              ["Все", 1, 2, 3, 4, 5, 6].map((item, index) => (
                <p onClick={() => handleRoomTo(item)} key={index}>
                  {item}
                </p>
              ))}
          </div>
        </div>
      </div>

      <div className="double-type__filter flex">
        <div className="accordion">
          <div
            onClick={() => setPriceFromOpen((prevState) => !prevState)}
            className="filter-btn flex"
          >
            <div>
              <h4>Цена от</h4>
              <p>{priceFrom} </p>
            </div>
            <img src={svgs.caret} alt="" />
          </div>
          <div className="accordion-content">
            {priceFromOpen &&
              [
                "Все",
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
                <p onClick={() => handlePriceFrom(item)} key={index}>
                  {typeof item === "string"
                    ? item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                    : `€ ${item
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`}
                </p>
              ))}
          </div>
        </div>

        <div className="accordion">
          <div
            onClick={() => setPriceToOpen((prevState) => !prevState)}
            className="filter-btn flex"
          >
            <div>
              <h4>До</h4>
              <p>{priceTo} </p>
            </div>
            <img src={svgs.caret} alt="" />
          </div>
          <div className="accordion-content">
            {priceToOpen &&
              [
                "Все",
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
                  {typeof item === "string"
                    ? item.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                    : `€ ${item
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`}
                </p>
              ))}
          </div>
        </div>
      </div>

      <button onClick={filterProjects} className="search-btn">
        <img src={svgs.search} alt="search" />
        <span>Поиск</span>
      </button>
    </div>
  )
}

export default Filter
