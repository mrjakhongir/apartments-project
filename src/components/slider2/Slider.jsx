import React from 'react'
import './slider.scss'
import Carousel from './carousel/Carousel'
import { pngs } from '../../constants/images'


const imgUrls = [ pngs.home1, pngs.home2, pngs.home3, pngs.home4, pngs.home5]

console.log(imgUrls);
function Slider() {
  return (
    <div>
      <Carousel images={imgUrls} />
    </div>
  )
}

export default Slider;
