"use client"

import { Content } from "@prismicio/client";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PrismicNextImage } from "@prismicio/next";

const ActivityGallery = ({
  slice,
}: {
  slice: Content.ActivityContainerSlice;
}) => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      navigation
      modules={[Pagination, Navigation, Autoplay]}
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
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      className="swiper "
    >
      {slice.primary.gallery.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="rounded-lg shadow-lg">
            <PrismicNextImage
              field={item.gallery_image}
              alt=""
              width={600}
              height={400}
              className=" w-full h-80 object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ActivityGallery;