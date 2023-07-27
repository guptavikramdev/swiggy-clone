import React from 'react'
import Slider from "react-slick";
const Carousel=({children,slides})=> {
  
    const settings = {
      speed: 500,
      slidesToShow: `${slides}`,
      slidesToScroll: 2,
      initialSlide: 0,
      dots: false,
      infinite: false,
    };
  return (
    <>
      <Slider {...settings} >
        {children}
      </Slider>
    </>
  )
}

export default Carousel