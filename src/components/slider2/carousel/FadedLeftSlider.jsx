import React from 'react'
import PropTypes from 'prop-types'

const FadedLeftSlide = ({ url }) => {
  const styles = {
    width: '1171px',
    height: '500px',
    borderRadius: '3px',
    // opacity: '0.5',
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: '35px',
    transform: 'translateX(0%)',
    opacity: '0.5'
  }

  return <div className="image-slide" style={styles} />
}

FadedLeftSlide.propTypes = {
  url: PropTypes.string.isRequired
}

export default FadedLeftSlide
