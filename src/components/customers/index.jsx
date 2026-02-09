import styles from "./styles.module.css";

import bitbucket from "../../assets/bitbucket.svg";
import watch from "../../assets/apple-watch.svg";       
import facebook from "../../assets/facebook2.svg"; 
import atlassian from "../../assets/atlassian.svg";
import audi from "../../assets/audi.svg";

export default function Customers() {
  const logos = [
    { src: bitbucket, alt: "Bitbucket" },
    { src: watch, alt: "Watch" },
    { src: facebook, alt: "Facebook" },
    { src: atlassian, alt: "Atlassian" },
    { src: audi, alt: "Audi" },
  ];

  return (
    <section className={styles.customers} aria-label="Customers">
      <div className={styles.container}>
        <ul className={styles.list}>
          {logos.map((logo) => (
            <li className={styles.item} key={logo.alt}>
              <img className={styles.logo} src={logo.src} alt={logo.alt} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
