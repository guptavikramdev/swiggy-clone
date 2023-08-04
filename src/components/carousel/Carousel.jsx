import React from 'react'
import Slider from "react-slick";
const Carousel=({children,slides,isFoodCarousel=false})=> {
  
    const settings = {
      speed: 500,
      slidesToShow: `${slides}`,
      slidesToScroll: 2,
      initialSlide: 0,
      dots: false,
      infinite: false,
       responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: `${ isFoodCarousel ? 2.5:1 }`,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: `${ isFoodCarousel ? 2.5:1 }`,
            slidesToScroll: 1
          }
        }
      ]
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