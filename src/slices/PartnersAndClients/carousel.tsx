"use client";

import { Content } from "@prismicio/client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { PrismicNextImage } from "@prismicio/next";

const Carousel = ({ slice }: { slice: Content.PartnersAndClientsSlice }) => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="swiper"
      >
        {slice.primary.carousel.map((item, index) => (
          <SwiperSlide
            key={index}
            className="swiper-slide flex justify-center items-center"
          >
            <PrismicNextImage
              field={item.partner}
              className="w-48 h-48 object-contain rounded-md shadow-md transition-transform duration-300 hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;