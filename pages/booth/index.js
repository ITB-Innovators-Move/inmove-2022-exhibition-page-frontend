import React from "react";
import styles from "../../styles/main/Main.module.css";

import Image from "next/image";
import Link from "next/link";
import BusinessImage from "../../public/assets/home/Business.png";
import InnovationImage from "../../public/assets/home/Innovation.png";
import Header from "../../components/header/Header";

const index = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.mainTitle}>
        Visit 20+ Research, Innovation, Technology Booths
      </h1>

      <div className={styles.cardWrapper}>
        <div className={styles.cardContainer}>
          <div className={styles.BusinessImage}>
            <img
              src={
                "https://res.cloudinary.com/djmwc8sxk/image/upload/v1648145184/Website/Business_s92jfp.png"
              }
              alt=""
              style={{ width: "20rem" }}
            />
          </div>
          <Link href="/booth/business-plan" passHref>
            <button className={styles.cardButton}>
              <p>Business Plan Competition</p>
            </button>
          </Link>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.BusinessImage}>
            <img
              src={
                "https://res.cloudinary.com/djmwc8sxk/image/upload/v1648145184/Website/Innovation_kt879c.png"
              }
              alt=""
              style={{ width: "20rem" }}
            />
          </div>

          <Link href="/booth/innovation" passHref>
            <button className={styles.cardButton}>
              <p>Innovation Competition</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
