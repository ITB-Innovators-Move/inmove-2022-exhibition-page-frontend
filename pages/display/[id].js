import React from "react";
import Image from "next/image";
import displayImage from "../../public/assets/carousel/6.jpg";
import styles from "../../styles/display/Display.module.css";
import Header from "../../components/header/Header";
import axios from "axios";

const Display = ({ inventor }) => {
  return (
    <div className={styles.displayContainer}>
      <Header />
      <pre>{JSON.stringify(inventor, null, 2)}</pre>
      <div className={styles.displayImg}>
        <img src={inventor.attributes.link} alt="" />
      </div>
      <h1>{inventor.attributes.title}</h1>
      <p>{inventor.attributes.desc}</p>
      <button className={styles.displayButton}>See More</button>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const {
    data: { data: inventor },
  } = await axios.get(`https://inmove-backend-22.herokuapp.com/api/inventors/${params.id}`);

  return {
    props: {
      inventor,
    }, // will be passed to the page component as props
  };
}

export default Display;
