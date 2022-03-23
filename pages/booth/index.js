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

      <div className="mainTitle">
        <h1>Visit 20+ Research, Innovation, Technology Booths</h1>
      </div>

      <div className={styles.cardWrapper}>
        <div className={styles.cardContainer}>
          <div className={styles.BusinessImage}>
            <Image
              src={BusinessImage}
              alt="Business Image"
              width={300}
              height={300}
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
            <Image
              src={InnovationImage}
              alt="Business Image"
              width={300}
              height={300}
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
