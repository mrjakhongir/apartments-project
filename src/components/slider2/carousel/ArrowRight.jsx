import React from 'react'
import PropTypes from 'prop-types'

const ArrowRight = ({ clickFunction, glyph }) => (
  <div
    style={{ fontSize: '24px' }}
    // className={`slide-arrow ${direction}`}
    onClick={clickFunction}
    className="slide-arrow wrapper"
  >
    {glyph}
  </div>
)

ArrowRight.propTypes = {
  direction: PropTypes.string.isRequired,
  clickFunction: PropTypes.func.isRequired,
  glyph: PropTypes.string.isRequired
}

export default ArrowRight
