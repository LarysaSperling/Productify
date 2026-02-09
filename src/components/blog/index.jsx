import styles from "./styles.module.css";

import blogImg from "../../assets/blog.png"; 
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";

export default function Blog() {
  return (
    <section className={styles.section}>
      
  
      <div className={styles.header}>
        <p className={styles.subtitle}>OUR RESOURCES</p>
        <h2 className={styles.title}>Start reading our blog</h2>
      </div>


      <div className={styles.slider}>

     
        <button className={`${styles.arrow} ${styles.left}`}>
          <img src={arrowLeft} alt="" />
        </button>

      
        <div className={styles.card}>

          
          <div className={styles.imageWrap}>
            <img src={blogImg} alt="Blog preview" />
          </div>

    
          <div className={styles.content}>
            <h3>How to start planning</h3>

           <p>
  Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam.
  Eu usu vidit tractatos, vero tractatos ius an, in mel diceret
  persecuti. Natum petentium principes mei ea. Tota everti
  periculis vis ei, quas tibique pro at, eos ut decore.
</p>


            <div className={styles.actions}>
              <button className={styles.readBtn}>Read now</button>
              <a href="#">Add to your bookmarks</a>
            </div>
          </div>

        </div>

        <button className={`${styles.arrow} ${styles.right}`}>
          <img src={arrowRight} alt="" />
        </button>

      </div>

     <div className={styles.dots}>
  <span className={`${styles.dot} ${styles.dotActive}`}></span>
  <span className={styles.dot}></span>
  <span className={styles.dot}></span>
</div>


    </section>
  );
}
