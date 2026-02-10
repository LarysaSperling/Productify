import { useState } from "react";
import styles from "./styles.module.css";

import avatar1 from "../../assets/man.png";

const quotes = Array.from({ length: 9 }, (_, i) => ({
  id: i,
  text:
    "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.",
  avatar: avatar1,
}));

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
       
          <div className={styles.left}>
            <p className={styles.subtitle}>TESTIMONIALS</p>
            <h2 className={styles.title}>Customers&apos;s quotes</h2>
            <p className={styles.desc}>
              Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
              Usu atqui laudem an.
            </p>
          </div>

          <div className={styles.right}>
            <div className={styles.viewportWrapper}>
              <div className={styles.viewport}>
                <div
                  className={styles.track}
                  style={{ ["--i"]: activeIndex }}
                >
                  {quotes.map((q) => (
                    <div key={q.id} className={styles.card}>
                      <p className={styles.quote}>{q.text}</p>
                      <img
                        src={q.avatar}
                        alt="Author"
                        className={styles.avatar}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.dots}>
                {quotes.map((_, i) => (
                  <span
                    key={i}
                    className={`${styles.dot} ${
                      i === activeIndex ? styles.dotActive : ""
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




