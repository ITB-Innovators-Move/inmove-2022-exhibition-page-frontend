import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import styles from "../../styles/booth/Booth.module.css";
import imageCard from "../../public/assets/carousel/6.jpg";
import imageCard2 from "../../public/assets/carousel/5.png";

const boothData = [
  {
    index: 0,
    title: "Sample Title 1",
    image: imageCard,
  },
  {
    index: 1,
    title: "Filler text is text that shares some characteristics",
    image: imageCard2,
  },
  {
    index: 2,
    title: "Filler text is text that shares some characteristics",
    image: imageCard,
  },
  {
    index: 3,
    title: "Filler text is text that shares some characteristics",
    image: imageCard2,
  },
  {
    index: 4,
    title: "Filler text is text that shares some characteristics",
    image: imageCard,
  },
  {
    index: 5,
    title: "Filler text is text that shares some characteristics",
    image: imageCard2,
  },
];

// import required modules
import { Navigation, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        slidesPerView={3}
        loop={true}
        spaceBetween={30}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        // cssMode={true}
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {boothData.map((data) => {
          return (
            <SwiperSlide className={styles.SlideItem} key={data.index}>
              <Image
                src={data.image}
                alt="image"
                className={styles.SlideImage}
              />
              <h3 className={styles.Heading}>{data.title}</h3>
              <button className={styles.SlideButton}>View More</button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
