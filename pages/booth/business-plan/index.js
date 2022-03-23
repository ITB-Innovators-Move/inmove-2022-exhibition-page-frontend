import React, { useRef, useState, useEffect } from "react";
import styles from "../../../styles/booth/Booth.module.css";
import Slider from "../../../components/booth/BoothSlider";
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

import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import api from "../../api/strapi";

import axios from "axios";

async function fetchPosts(){
  const {data} = await axios.get('http://localhost:1337/api/inventors')    
  // const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')    
  console.log(data.data)
  return data.data
}

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

const BusinessPlan = () => {
  // const [posts, setPosts] = useState([]);

  // const queryClient = useQueryClient();

  // // Queries
  // const query = useQuery("todos", getTodos);

  // // Mutations
  // const mutation = useMutation(postTodo, {
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries("todos");
  //   },
  // });

  // useEffect(() => {
  //   console.log("use effect");
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:1337/api/inventors");
  //       setPosts(response.data);
  //       console.log(posts);
  //     } catch (err) {
  //       if (err.response) {
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       } else {
  //         console.log(`Err: ${err.message}`);
  //       }
  //     }
  //   };
  //   fetchPosts();
  // });

  // const {isLoading, error, boothDataFetch} = useQuery('fetchData', ()=>{
  //   axios('http://localhost:1337/api/inventors')
  // })

  const {data, error, isError, isLoading} = useQuery('posts', fetchPosts)

  

  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.titlePage}>Exhibition Title</h1>
      {/* <Slider boothData={posts} /> */}

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
        {data?.map((post, index) => {
          return (
            <SwiperSlide className={styles.SlideItem} key={post.index}>
              <Image
                src={imageCard}
                alt="image"
                className={styles.SlideImage}
              />
              <h3 className={styles.Heading}>{post.attributes.title}</h3>
              <button className={styles.SlideButton}>
                <Link href="/display">View More</Link>
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default BusinessPlan;
