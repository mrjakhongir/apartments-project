import React from "react"
import "./imageSlider.scss"
import { svgs } from "../../constants/images"

export const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrrentIndex] = React.useState(0)
  const [moveRight, setMoveRight] = React.useState(false)
  const [moveLeft, setMoveLeft] = React.useState(false)

  function prevSlide() {
    const isFirstIndex = currentIndex === 0
    const newIndex = isFirstIndex ? slides.length - 1 : currentIndex - 1
    setCurrrentIndex(newIndex)
    setMoveLeft(true)
  }
  function nextSlide() {
    const isLastIndex = currentIndex === slides.length - 1
    const newIndex = isLastIndex ? 0 : currentIndex + 1
    setCurrrentIndex(newIndex)
    setMoveRight(true)
  }
  return (
    <div className="projects-gallery">
      <div
        className={`gallery-container flex ${moveRight ? "animate-left" : ""} ${
          moveLeft ? "animate-right" : ""
        }`}
      >
        {slides.map((slide, index) => (
          <img key={index} className="project-img" src={slide} alt="project" />
        ))}
      </div>
      <div className="slides-btns">
        <button onClick={() => prevSlide()} className="slider-btn prev-btn">
          <img src={svgs.caretFill} alt="" />
        </button>
        <button onClick={() => nextSlide()} className="slider-btn next-btn">
          <img src={svgs.caretFill} alt="" />
        </button>
      </div>
    </div>
  )
}
