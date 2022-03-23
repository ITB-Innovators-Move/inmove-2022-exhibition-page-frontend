import React from "react";
import Image from "next/image";
import displayImage from "../../public/assets/carousel/6.jpg";
import styles from "../../styles/display/Display.module.css";
import Header from "../../components/header/Header";

const index = () => {
  return (
    <div className={styles.displayContainer}>
      <Header />

      <div className={styles.displayImg}>
        <Image src={displayImage} alt="display img" />
      </div>
      <h1 className={styles.displayTitle}>FIABLE (Fish Attractor Portable)</h1>
      <p className={styles.displayDesc}>
        Alat kami memiliki 4 bagian utama yaitu sistem aktraktan yang
        memanfaatkan frekuensi suara dan intensitas cahaya, sistem pembangkit
        listrik tenaga gelombang air laut sistem bandul atau PLTGL-SB, komponen
        integrasi IoT serta konstruksi kapal yang tahan terhadap gelombang
        besar. Nelayan diuntungkan dengan bantuan teknologi yang mempermudah
        penangkapan ikan dan monitoring kinerja alat melalui smartphone. Sistem
        PLTGL-SB akan menghasilkan energi listrik dari gerakan osilasi bandul,
        yang kemudian menjadi sumber energi dari Atraktan yang kemudian akan
        dikontrol melalui smartphone untuk menyalakan atraktan yang terdiri dari
        cahaya biru dan frekuensi suara 1 kHz. Fiable menjadi sistem penangkapan
        ikan pertama yang menggabungkan 2 elemen khusus penarik perhatian ikan
        yang diintegrasikan melalui Internet of Things tipe Long Range (LoRa).
      </p>
      <button className={styles.displayButton}>See More</button>
    </div>
  );
};

export default index;
