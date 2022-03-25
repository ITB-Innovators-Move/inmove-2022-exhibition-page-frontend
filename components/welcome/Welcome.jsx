import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../public/assets/logo/logo-in-move.png";
import styles from "../../styles/welcome/Welcome.module.css";
import Link from "next/link";
import axios from "axios";
import Router from "next/router";
import Typewriter from "typewriter-effect";

const Welcome = () => {
  const [nama, setNama] = useState("");
  const [institusi, setInstitusi] = useState("");
  const [msg, setMsg] = useState("");

  let config = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const Register = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://inmove-backend-22.herokuapp.com/api/guests", {
        data: {
          nama: nama,
          institusi: institusi,
        },
      });
      Router.push("/booth");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className={styles.welcome}>
      <img
        src={
          "https://res.cloudinary.com/djmwc8sxk/image/upload/v1648145167/Website/logo-in-move_ksggeb.png"
        }
        alt=""
        className={styles.welcomeLogo}
      />
      {/* <Image src={Logo} alt="in move logo" /> */}
      <p className={styles.welcomeTitle}>Welcome to ITB In Move Exhibitions</p>
      <div></div>{" "}
      <div id="container" className={styles.welcomeGuest}>
        <form className={styles.welcomeGuestForm} onSubmit={Register}>
          <input
            type="text"
            name="field1"
            placeholder="Nama"
            className={styles.welcomeInput}
            required
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
          <input
            type="text"
            name="field2"
            placeholder="Institusi"
            required
            className={styles.welcomeInput}
            value={institusi}
            onChange={(e) => setInstitusi(e.target.value)}
          />
          <button className={styles.welcomeButton} type="submit">
            Enter Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Welcome;
