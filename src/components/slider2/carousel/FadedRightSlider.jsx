import React from 'react'
import PropTypes from 'prop-types'

const FadedRightSlide = ({ url }) => {
  const styles = {
    width: '920px',
    height: '500px',
    borderRadius: '3px',
    // opacity: '0.5',
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: '35px',
    transform: 'translate3d(-12%,0,-50px)',
    opacity: '0.5'
  }

  return <div className="image-slide" style={styles} />
}

FadedRightSlide.propTypes = {
  url: PropTypes.string.isRequired
}

export default FadedRightSlide
