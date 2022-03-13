import React from "react";
import Image from "next/image";
import Logo from "../public/assets/logo/logo-in-move.png";
import styles from "../styles/welcome/Welcome.module.css";

function welcome() {
  return (
    <div className={styles.welcome}>
      <div className={styles.welcomeLogo}>
        <Image src={Logo} alt="in move logo" />
      </div>
      <p className={styles.welcomeTitle}>Welcome to ITB In Move Exhibitions</p>
      <div></div>{" "}
      <div id="container">
        <button className={styles.welcomeButton}>Enter Now</button>
      </div>
    </div>
  );
}

export default welcome;
