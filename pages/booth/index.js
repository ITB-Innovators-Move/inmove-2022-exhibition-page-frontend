import React from "react";
import styles from "../../styles/main/Main.module.css";

import Image from "next/image";
import Link from "next/link";
import BusinessImage from "../../public/assets/home/Business.png";
import InnovationImage from "../../public/assets/home/Innovation.png";
import Header from "../../components/header/Header";

import Lottie from "react-lottie";
import animationData from "../../public/assets/welcome/loading-page.json";
import { motion } from "framer-motion";

const index = () => {
  return (
    <div className={styles.container}>
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
      >
        <h1 className={styles.mainTitle}>
          Visit Research, Innovation, Technology Booths
        </h1>

        <div className={styles.cardWrapper}>
          <div className={styles.cardContainer}>
            <div className={styles.BusinessImage}>
              <img
                src={
                  "https://res.cloudinary.com/djmwc8sxk/image/upload/v1648145184/Website/Business_s92jfp.png"
                }
                alt=""
                style={{ width: "18rem" }}
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
                style={{ width: "18rem" }}
              />
            </div>

            <Link href="/booth/innovation" passHref>
              <button className={styles.cardButton}>
                <p>Innovation Competition</p>
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default index;
