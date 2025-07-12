import React from 'react'
import styles from "@/components/Header/Header.module.css";

export default function News() {
  return (
     <div className={styles.heroSide} id="about">
        <main className={styles.heroSection}>
          <h1>Vist the World arround you</h1>
          <p>
            take a break from the stress of everday life, plan trips and explore
            your favorite destinations
          </p>
          <button>
            Explore
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </main>
      </div>
  )
}
