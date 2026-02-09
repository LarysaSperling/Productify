import styles from "./styles.module.css";

import speedIcon from "../../assets/speed.svg";
import usersIcon from "../../assets/users.svg";

const statsData = [
  {
    id: 1,
    variant: "primary",
    icon: speedIcon,
    value: "89%",
    text: "Customers who have\nincreased their productivity",
  },
  {
    id: 2,
    variant: "secondary",
    icon: usersIcon,
    value: "3123",
    text: "Users who have used our\napplication",
  },
];

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {statsData.map((item) => (
          <div
            key={item.id}
            className={`${styles.card} ${
              item.variant === "primary" ? styles.primary : styles.secondary
            }`}
          >
            <img className={styles.icon} src={item.icon} alt="" />
            <div className={styles.value}>{item.value}</div>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
