import React from "react";
import Image from "next/image";
import displayImage from "../../public/assets/carousel/6.jpg";
import styles from "../../styles/display/Display.module.css";
import Header from "../../components/header/Header";

const DisplayBooth = ({ desc }) => {
  return (
    <div className={styles.displayContainer}>
      <Header />

      <div className={styles.displayImg}>
        <Image src={displayImage} alt="display img" />
      </div>
      <h1 className={styles.displayTitle}>{title}</h1>
      <p className={styles.displayDesc}>{desc}</p>
      <button className={styles.displayButton}>See More</button>
    </div>
  );
};

export default DisplayBooth;
