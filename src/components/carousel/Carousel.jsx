import React, { useState } from "react";
import Slider from "react-slick";
import { Title } from "../common";
import { LeftArrowShortIcon, RightArrowShortIcon } from "../svgIcons";
const Carousel = ({ children, slides, isFoodCarousel = false, title = "" }) => {
  const [sliderRef, setSliderRef] = useState(null);
  const settings = {
    speed: 1000,
    arrows: false,
    slidesToShow: `${slides}`,
    slidesToScroll: `1`,
    initialSlide: 0,
    dots: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: `${isFoodCarousel ? 2.5 : 1}`,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 648,
        settings: {
          slidesToShow: `${isFoodCarousel ? 2.5 : 1}`,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: `${isFoodCarousel ? 2.5 : 1}`,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <Title text={title} />
        <div className="flex gap-4">
          <button
            className="w-9 h-9 flex items-center justify-center cursor-pointer  rounded-full bg-gray-200"
            onClick={sliderRef?.slickPrev}
          >
            <LeftArrowShortIcon />
          </button>
          <button
            className="w-9 h-9 flex items-center justify-center cursor-pointer rounded-full bg-gray-200"
            onClick={sliderRef?.slickNext}
          >
            <RightArrowShortIcon />
          </button>
        </div>
      </div>
      <Slider ref={setSliderRef} {...settings}>
        {children}
      </Slider>
    </>
  );
};

export default Carousel;
