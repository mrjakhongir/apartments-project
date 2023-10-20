import React from 'react'
import PropTypes from 'prop-types'

const ArrowLeft = ({ clickFunction, glyph }) => (
  <div
    onClick={clickFunction}
    className="carousel_prev wrapper"
  >
    {glyph}
  </div>
)

ArrowLeft.propTypes = {
  // direction: PropTypes.string.isRequired,
  clickFunction: PropTypes.func.isRequired,
  glyph: PropTypes.string.isRequired
}

export default ArrowLeft
