import styles from "./styles.module.css";

export default function Newsletter() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.left}>
          <h3 className={styles.title}>
            Sign up for newsletter
          </h3>

          <p className={styles.desc}>
            Cu qui soleat partiendo urbanitas. 
            Eum aperiri indoctum eu, homero alterum.
          </p>
        </div>

    
        <form className={styles.form}>
          <input
            type="email"
            placeholder="Email address"
            className={styles.input}
          />

          <button className={styles.button}>
            Save me
          </button>
        </form>

      </div>
    </section>
  );
}
