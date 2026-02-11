import styles from "./styles.module.css";

export default function GetStarted() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>

        <p className={styles.subtitle}>
          PLAN YOUR LIFE
        </p>

        <h2 className={styles.title}>
          Get <span>started</span> now
        </h2>

        <p className={styles.desc}>
          Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
          Usu atqui laudem an, insolens gubergren similique est cu.
          Et vel modus congue vituperata.
        </p>

        <div className={styles.actions}>
          <button className={styles.primaryBtn}>
            View pricing
          </button>

          <button className={styles.secondaryBtn}>
            Read documentation
          </button>
        </div>

      </div>
    </section>
  );
}
