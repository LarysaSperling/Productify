import styles from "./styles.module.css";

import illustration from "../../assets/illustration.png";

export default function PlanManage() {
  return (
    <section className={styles.section} aria-label="Plan and manage">
      <div className={styles.container}>
        <div className={styles.grid}>
         
          <div className={styles.content}>
            <p className={styles.kicker}>DESKTOP AND MOBILE APP</p>

            <h2 className={styles.title}>
              Plan and <span className={styles.titleStrong}>manage</span>
            </h2>

            <p className={styles.text}>
              Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
              atqui laudem an, insolens gubergren similique est cu. Et vel modus
              congue vituperata. Solum patrioque no sea. Mea ex malis mollis
              oporteat. Eum an expetenda consequat.
            </p>

            <div className={styles.actions}>
              <button className={styles.btnPrimary} type="button">
                View video <span className={styles.arrow}>▶</span>
              </button>
              <button className={styles.btnGhost} type="button">
                See features
              </button>
            </div>
          </div>

        
          <div className={styles.media}>
            <img
              className={styles.illustration}
              src={illustration}
              alt="App preview"
            />
          </div>
        </div>
      </div>
    </section>
  );
}




