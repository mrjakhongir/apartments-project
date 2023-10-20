import React from 'react'
import PropTypes from 'prop-types'

const FadedLeftSlide = ({ url }) => {
  const styles = {
    borderRadius: '3px',
    // opacity: '0.5',
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: '35px',
    opacity: '0.5',
    transition: '900ms ease-in-out 0s'
  }

  return <div className="image_left_slide" style={styles} />
}

FadedLeftSlide.propTypes = {
  url: PropTypes.string.isRequired
}

export default FadedLeftSlide
