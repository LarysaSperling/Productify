import { useState } from "react";
import styles from "./styles.module.css";

import arrowDown from "../../assets/arrow-down.svg";
import arrowUp from "../../assets/arrow-up.svg";

const faq = [
  {
    id: 1,
    question: "Reque insolens in vel?",
    answer:
      "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.",
  },
  {
    id: 2,
    question: "Vis rebum error graecis ea, id sit postea accusamus?",
    answer:
      "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam.",
  },
  {
    id: 3,
    question: "Lorem repudiandae ne nec?",
    answer:
      "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam. Eu usu vidit tractatos, vero tractatos ius an, in mel diceret persecuti.",
  },
  {
    id: 4,
    question:
      "Ad dicit numquam vel. Et eos iudico feugiat percipitur?",
    answer:
      "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam.",
  },
  {
    id: 5,
    question:
      "Sea no dico percipitur. Fierent constituam definitiones id eum?",
    answer:
      "Quidam vocibus eum ne, erat consectetuer voluptatibus ut nam.",
  },
];

export default function CustomerHelp() {
  const [openId, setOpenId] = useState(null); 
 

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <p className={styles.subtitle}>CUSTOMER HELP</p>
        <h2 className={styles.title}>
          Frequently asked questions
        </h2>

        <div className={styles.accordion}>
          {faq.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className={styles.item}>
                
               
                <button
                  className={styles.header}
                  onClick={() => toggle(item.id)}
                >
                  <img
                    src={isOpen ? arrowUp : arrowDown}
                    alt=""
                    className={styles.icon}
                  />

                  <span
                    className={`${styles.question} ${
                      isOpen ? styles.questionOpen : ""
                    }`}
                  >
                    {item.question}
                  </span>
                </button>

               
                <div
                  className={`${styles.body} ${
                    isOpen ? styles.bodyOpen : ""
                  }`}
                >
                  <p className={styles.answer}>
                    {item.answer}
                  </p>

                  {isOpen && (
  <button className={styles.docBtn} type="button">
    Go to documentation
  </button>
)}

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


