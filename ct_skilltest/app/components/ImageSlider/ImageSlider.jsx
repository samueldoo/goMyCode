'use client'
import { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "/hero.png",
    "/hero2.png",
    "/hero.png",
    "/hero2.png"
  ];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
  };

  return (
    <div className="relative m-auto w-2/4 mt-[25.5rem] lg:mt-[25.6rem] p-6">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center p-1">
            <img src={image} alt={`slide-${index}`} className="w-[10.6rem] h-[4.7rem] m-0" />
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center mt-3">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full mb-5 mx-1 ${
              currentSlide % images.length === index ? 'bg-gray-300' : 'bg-gray-500'
            }`}
            onClick={() => setCurrentSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
