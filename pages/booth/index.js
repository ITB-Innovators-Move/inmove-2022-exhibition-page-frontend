import React from "react";
import styles from "../../styles/main/Main.module.css";

import Image from "next/image";
import Link from "next/link";
import BusinessImage from "../../public/assets/home/Business.png";
import InnovationImage from "../../public/assets/home/Innovation.png";

const index = () => {
  return (
    <div className={styles.container}>
      <div className="mainTitle">
        <h1>Visit 80+ Research, Innovation, Technology Booths</h1>
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
          <button className={styles.cardButton}>
            <Link href="booth/business-plan" passHref>
              <p>Business Plan Competition</p>
            </Link>
          </button>
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
          <button className={styles.cardButton}>
            <Link href="/booth/innovation" passHref>
              <p>Innovation Competition</p>
            </Link>
          </button>
        </div>

      </div>
    </div>
  );
};

export default index;
