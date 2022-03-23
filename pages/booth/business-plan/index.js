import React from "react";
import styles from "../../../styles/booth/Booth.module.css";
import Slider from "../../../components/booth/BoothSlider";
import Header from "../../../components/header/Header";


const index = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.titlePage}>Exhibition Title</h1>
      <Slider />
    </div>
  );
};

export default index;
