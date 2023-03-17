import React from "react";
import styles from "./HomePage.module.css";
import cover from "../image/background_home_1.png";
import ad1 from "../image/ad1.png";
import ad3 from "../image/ad3.jpg";
import TransBgBtn from "../components/UI/TransBgBtn";
import LiteratureSection from "../components/body/home/LiteratureSection";
import MediaSection from "../components/body/home/MediaSection";
import AudioSection from "../components/body/home/AudioSection";
import { useSelector } from "react-redux";

const HomePage = () => {
  const homepageData = useSelector((state) => state.homepage.homepageData);

  return (
    <>
      <div className={styles.cover_container}>
        <img
          className={styles.cover}
          alt="cover_image"
          src={homepageData.homepage_banner_image}
        />
        <div className={styles.text_area}>
          <p className={styles.title}>{homepageData.homepage_title}</p>
          <p className={styles.des}>{homepageData.homepage_description}</p>
          <TransBgBtn />
        </div>
      </div>
      <div className={styles.ad_section}>
        <img
          className={styles.ad1}
          alt="ad"
          src={homepageData.homepage_promotional_banner1}
        />
        <img
          className={styles.ad1}
          alt="ad"
          src={homepageData.homepage_promotional_banner2}
        />
      </div>

      <div className={styles.content_container}>
        <LiteratureSection />
      </div>

      <div className={styles.media_content_container}>
        <MediaSection />
      </div>

      <div className={styles.media_content_container}>
        <AudioSection />
      </div>

      <div className={styles.about}>
        <p className={styles.about_title}>About Us</p>
        <hr className={styles.hr} />
        <p className={styles.about_des}>{homepageData.about_us}</p>
      </div>
    </>
  );
};

export default HomePage;
