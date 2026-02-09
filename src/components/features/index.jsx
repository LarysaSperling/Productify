import styles from "./styles.module.css";

import overviewIcon from "../../assets/overview.svg";
import filesIcon from "../../assets/files.svg";
import chatsIcon from "../../assets/chats.svg";
import eventsIcon from "../../assets/events.svg";


const featuresData = [
  {
    id: 1,
    icon: overviewIcon,
    title: "Overview",
    text: "Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.",
  },
  {
    id: 2,
    icon: filesIcon,
    title: "Files",
    text: "No vim nulla vitae intellegat. Ei enim error ius, solet atomorum conceptam ex has.",
  },
  {
    id: 3,
    icon: chatsIcon,
    title: "Meeting chats",
    text: "Vim ne tacimates neglegentur. Erat diceret omittam at est.",
  },
  {
    id: 4,
    icon: eventsIcon,
    title: "Save events",
    text: "Nisl idque mel ea, nominati voluptatum.",
  },
];

export default function Features() {
  return (
    <section className={styles.section}>
      <div className={styles.subtitle}>ABOUT US</div>
      <h2 className={styles.title}>Read about our app</h2>

      <div className={styles.grid}>
       {featuresData.map((item) => (
  <div key={item.id} className={styles.card}>
    <div className={styles.iconWrap}>
      <img src={item.icon} alt={item.title} />
    </div>

    <h3 className={styles.cardTitle}>{item.title}</h3>
    <p className={styles.cardText}>{item.text}</p>
  </div>
))}

      </div>

      <div className={styles.actions}>
  <button className={styles.btnPrimary}>Read more</button>

  <div className={styles.orWrap}>
    <span>OR</span>
  </div>

  <button className={styles.btnSecondary}>Get started</button>
</div>

    </section>
  );
}
