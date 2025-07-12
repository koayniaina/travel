import React from "react";
import styles from "@/components/Footer/Footer.module.css";
export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <section className={styles.icons}>
          <span className="material-symbols-outlined">add_a_photo</span>
          <span className="material-symbols-outlined">youtube_activity</span>
          <span className="material-symbols-outlined">chat</span>
        </section>
        <section>
          <h2>japan world</h2>
          <p>2023 reserved right Now</p>
        </section>
      </footer>
    </div>
  );
}
