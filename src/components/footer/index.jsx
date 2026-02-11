import styles from "./styles.module.css";

import facebook from "../../assets/facebook.svg";
import telegram from "../../assets/telegram.svg";
import twitter from "../../assets/twitter.svg";
import medium from "../../assets/medium.svg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
      
        <div className={styles.left}>
          <div className={styles.logo}></div>

          <nav className={styles.nav}>
            <a href="#">Home</a>
            <a href="#">Blog</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Documentation</a>
          </nav>
        </div>

        <div className={styles.right}>
          <div className={styles.socials}>
            <img src={facebook} alt="" />
            <img src={telegram} alt="" />
            <img src={twitter} alt="" />
            <img src={medium} alt="" />
          </div>

          <button className={styles.btn}>
            Get started
          </button>
        </div>
      </div>
      
      <p className={styles.copy}>
        Copyright © 2018 By Random Site
      </p>
    </footer>
  );
}
