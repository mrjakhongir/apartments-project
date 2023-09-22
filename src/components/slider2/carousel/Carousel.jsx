import React from 'react'
import PropTypes from 'prop-types'
import ImageSlide from './ImageSlide'
import FadedImageSlider from './FadedRightSlider'
import './styles.scss'
import ArrowRight from './ArrowRight'
import ArrowLeft from './ArrowLeft'
import FadedRightSlide from './FadedRightSlider'
import FadedLeftSlide from './FadedLeftSlider'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'GOTO_START_INDEX':
      return Object.assign({}, state, { index: 0 })
    case 'GOTO_END_INDEX':
      return Object.assign({}, state, {
        index: action.payload
      })
    case 'INCREMENT_INDEX':
      return Object.assign({}, state, {
        index: state.index + 1
      })
    case 'DECREMENT_INDEX':
      return Object.assign({}, state, {
        index: state.index - 1
      })
    default:
      return state
  }
}

function Carousel({ images }) {
  const [{ index }, dispatch] = React.useReducer(reducer, {
    index: 0
  })

  return (
    <div className="carousel_position">
      <ArrowLeft
        clickFunction={() =>
          index === 0
            ? dispatch({ type: 'GOTO_END_INDEX', payload: images.length - 1 })
            : dispatch({ type: 'DECREMENT_INDEX' })
        }
        glyph="&#9664;"
      />

      <div style={{ display: 'flex', justifyContent: "space-around" , }}>
        <FadedRightSlide
          url={index === 0 ? images[images.length - 1] : images[index - 1]}
        />
        <ImageSlide url={images[index]} className="wrapper"/>
        
        <FadedLeftSlide
          url={index === images.length - 1 ? images[0] : images[index + 1]}
        />
      </div>

      <ArrowRight
        direction="right"
        clickFunction={() =>
          index === images.length - 1
            ? dispatch({ type: 'GOTO_START_INDEX' })
            : dispatch({ type: 'INCREMENT_INDEX' })
        }
        glyph="&#9654;"
      />
    </div>
  )
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired
}

export default Carousel
