import React, { useRef, useState, useEffect } from "react";
import styles from "../../../styles/booth/Booth.module.css";
import Header from "../../../components/header/Header";
import Typewriter from "typewriter-effect";

import imageCard from "../../../public/assets/carousel/6.jpg";
import imageCard2 from "../../../public/assets/carousel/5.png";

import Lottie from "react-lottie";
import animationData from "../../../public/assets/welcome/loading-page.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Image from "next/image";

import { motion } from "framer-motion";

import Link from "next/link";

import { useQuery } from "react-query";

import axios from "axios";

async function fetchPosts() {
  const { data } = await axios.get(
    "https://inmove-backend-22.herokuapp.com/api/categories?fields=name&populate=inventors"
  );
  // console.log(data.data[0].attributes.inventors.data);
  return data.data[0].attributes.inventors.data;
}

const BusinessPlan = () => {
  const { data, error, isError, isLoading } = useQuery("posts", fetchPosts);
  const [loading, setloading] = useState(true);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <motion.div
      className={styles.container}
      exit={{
        opacity: 0,
        y: -50,
      }}
      transition={{
        type: "spring",
        mass: 0.9,
        stiffness: 30,
        duration: 0.01,
      }}
    >
      <Header />
      {isLoading ? (
        <div className={styles.BoothLoading}>
          <div className={styles.BoothLottie}>
            <Lottie options={defaultOptions} height={250} width={250} />
          </div>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('<span style="color: white;">Loading . . . </span>')
                .start()
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
          />
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ y: -10, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeInOut",
          }}
          exit={{
            opacity: 0,
            y: -50,
          }}
        >
          <h1 className={styles.titlePage}>Business Plan Competition</h1>
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
              100: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              400: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              800: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1500: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {data?.map((post) => {
              return (
                <SwiperSlide className={styles.SlideItem} key={post.id}>
                  <div className={styles.ImageCardSize}>
                    <img
                      src={post.attributes.link}
                      alt="image-display"
                      className={styles.SlideImage}
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
        </motion.div>
      )}
    </motion.div>
  );
};

export default BusinessPlan;
