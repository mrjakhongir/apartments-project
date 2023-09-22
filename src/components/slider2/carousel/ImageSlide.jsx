import React from 'react'

const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: '2',
    marginTop: '35px',
    width: '920px',
    height: '500px',
    borderRadius: '3px',
    transform: 'translate3d(-78%, 0,-50px)'
  }

  return <div className="image-slide" style={styles} />
}

export default ImageSlide
