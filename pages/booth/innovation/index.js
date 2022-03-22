import React from "react";
import styles from "../../../styles/booth/Booth.module.css";
import Slider from "../../../components/booth/BoothSlider";


const index = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.titlePage}>Exhibition Title</h1>
      <Slider />
    </div>
  );
};

export default index;
