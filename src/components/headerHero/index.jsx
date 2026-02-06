import styles from "./styles.module.css";

import logo from "../../assets/logo-circle.svg";
import facebook from "../../assets/facebook.svg";
import telegram from "../../assets/telegram.svg";
import twitter from "../../assets/twitter.svg";
import medium from "../../assets/medium.svg";

import heroBg from "../../assets/hero-bg.jpg"; 

export default function HeaderHero() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerGrid}>
           
            <div className={styles.left}>
              <a href="/" className={styles.logo} aria-label="Logo">
                <img className={styles.logoImg} src={logo} alt="Logo" />
              </a>

              <nav className={styles.nav} aria-label="Main navigation">
                <a className={`${styles.link} ${styles.active}`} href="#">
                  Home
                </a>
                <a className={styles.link} href="#">
                  Blog
                </a>
                <a className={styles.link} href="#">
                  Features
                </a>
                <a className={styles.link} href="#">
                  Pricing
                </a>
                <a className={styles.link} href="#">
                  Documentation
                </a>
              </nav>
            </div>

          
            <div className={styles.center} />

           
            <div className={styles.right}>
              <div className={styles.social}>
                <a className={styles.socialLink} href="#" aria-label="Facebook">
                  <img src={facebook} alt="" />
                </a>
                <a className={styles.socialLink} href="#" aria-label="Telegram">
                  <img src={telegram} alt="" />
                </a>
                <a className={styles.socialLink} href="#" aria-label="Twitter">
                  <img src={twitter} alt="" />
                </a>
                <a className={styles.socialLink} href="#" aria-label="Medium">
                  <img src={medium} alt="" />
                </a>
              </div>

              <button className={styles.btn} type="button">
                Get started
              </button>
            </div>
          </div>
        </div>
      </header>

      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className={styles.containerHero}>
          <p className={styles.kicker}>PLAN YOUR LIFE</p>
    <h1 className={styles.title}>
    <span className={styles.titleLight}>Increase your</span>{" "}
    <span className={styles.titleBold}>productivity</span>
    </h1>


          <p className={styles.text}>
           Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui
           laudem an, insolens gubergren similique est cu. Et vel modus congue
           vituperata.
          </p>

          <button className={styles.play} type="button" aria-label="Play video">
            ▶
          </button>

          <div className={styles.dots} aria-label="Slider dots">
            <span className={`${styles.dot} ${styles.dotActive}`} />
            <span className={styles.dot} />
            <span className={styles.dot} />
          </div>
        </div>
      </section>
    </>
  );
}


