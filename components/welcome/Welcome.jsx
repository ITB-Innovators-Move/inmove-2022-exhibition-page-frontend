import React from "react";
import Image from "next/image";
import Logo from "../../public/assets/logo/logo-in-move.png";
import styles from "../../styles/welcome/Welcome.module.css";
import Link from 'next/link'

function welcome() {
  return (
    <div className={styles.welcome}>
      <div className={styles.welcomeLogo}>
        <img src={'https://res.cloudinary.com/djmwc8sxk/image/upload/v1648145167/Website/logo-in-move_ksggeb.png'} alt="" style={{width:"12rem"}} />
        {/* <Image src={Logo} alt="in move logo" /> */}
      </div>
      <p className={styles.welcomeTitle}>Welcome to ITB In Move Exhibitions</p>
      <div></div>{" "}
      <div id="container">
        <button className={styles.welcomeButton}><Link href="/booth">Enter Now</Link></button>
      </div>
    </div>
  );
}

export default welcome;
