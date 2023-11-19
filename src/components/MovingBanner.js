import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../assets/images/banner1.jpg";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner3.jpg";

const MovingBanner = () => {
  return (
    <div className="relative mt-10 md:p-10">
      <Carousel
        autoPlay
        stopOnHover={false}
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        interval={3000}
        transitionTime={1000}
      >
        <div>
          <img src={banner1} alt="" className="md:rounded-lg" />
        </div>
        <div>
          <img src={banner2} alt="" className="md:rounded-lg" />
        </div>
        <div>
          <img src={banner3} alt="" className="md:rounded-lg" />
        </div>
      </Carousel>
    </div>
  );
};

export default MovingBanner;
