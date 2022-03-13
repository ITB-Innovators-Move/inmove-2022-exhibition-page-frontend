import React, { useState, useLayoutEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";

import Lottie from "react-lottie";
import animationData from "../public/assets/welcome/loading-animation.json";

import Welcome from "../pages/welcome";

export default function Home() {
  const [loading, setloading] = useState(true);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useLayoutEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.backgroundImage}> ''</div>
      <div className={styles.backgroundOverlay}></div>
      <div className={styles.main}>
        <motion.div
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
          {loading ? (
            <Lottie options={defaultOptions} height={200} width={200} />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ y: -10, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: "easeInOut",
              }}
            >
              <Welcome />
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
