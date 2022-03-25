import React from "react";
import Image from "next/image";
import displayImage from "../../public/assets/carousel/6.jpg";
import styles from "../../styles/display/Display.module.css";
import Header from "../../components/header/Header";
import axios from "axios";

import { motion } from "framer-motion";

const Display = ({ inventor }) => {
  return (
    <motion.div className={styles.displayContainer}>
      <Header />
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
        className={styles.mainContainer}
      >
        {/* <pre>{JSON.stringify(inventor, null, 2)}</pre> */}
        <h1 className={styles.DisplayTitle}>{inventor.attributes.title}</h1>
        <img
          src={inventor.attributes.link}
          alt=""
          className={styles.displayImg}
        />

        <p className={styles.displayDesc}>{inventor.attributes.desc}</p>
        {/* <button className={styles.displayButton}>See More</button> */}
      </motion.div>
    </motion.div>
  );
};

export async function getServerSideProps({ params }) {
  const {
    data: { data: inventor },
  } = await axios.get(
    `https://inmove-backend-22.herokuapp.com/api/inventors/${params.id}`
  );

  return {
    props: {
      inventor,
    }, // will be passed to the page component as props
  };
}

export default Display;
