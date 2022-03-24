import React, { useRef, useState, useEffect } from "react";
import styles from "../../../styles/booth/Booth.module.css";
import Header from "../../../components/header/Header";

import imageCard from "../../../public/assets/carousel/6.jpg";
import imageCard2 from "../../../public/assets/carousel/5.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import Link from "next/link";

import { useQuery } from "react-query";

import axios from "axios";

async function fetchPosts() {
  const { data } = await axios.get(
    "http://inmove-backend-22.herokuapp.com/api/inventors"
  );
  console.log(data.data);
  return data.data;
}

const BusinessPlan = () => {
  const { data, error, isError, isLoading } = useQuery("posts", fetchPosts);
  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.titlePage}>Exhibition Title</h1>
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
        {data?.map((post) => {
          return (
            <SwiperSlide className={styles.SlideItem} key={post.id}>
              {/* <Image
                src={`http://localhost:1337${post.attributes.image.data[0].attributes.formats.medium.url}`}
                alt="image"
                className={styles.SlideImage}
                width={100}
                height={100}
              /> */}
              <div className={styles.ImageCardSize}>
                <Image
                  src={post.attributes.link}
                  alt="image"
                  className={styles.SlideImage}
                  layout={"fill"}
                  objectFit={"cover"}
                />
              </div>

              <h3 className={styles.Heading}>{post.attributes.title}</h3>
              <button className={styles.SlideButton}>
                <Link href={`/display/${post.id}`}>View More</Link>
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BusinessPlan;
