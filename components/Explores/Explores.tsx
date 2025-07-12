import React from "react";
import styles from "@/components/Explores/Explores.module.css";
import { FaFacebookSquare, FaInstagramSquare, FaTwitter } from "react-icons/fa";

export default function Explores() {
  return (
    <main>
      <section className={styles.heroExplore}>
        <div className={styles.HeroSider}>
          <h2>
            Explore the <span>world</span> with us
          </h2>
          <p>Discover possibilities of travalling!</p>
          <button>Explore</button>
        </div>
      </section>
      <section className={styles.mygrid}>
        <div className={styles.chiffres}>
          <h5>Gust</h5>
          <p>2 Parents</p>
        </div>
        <div className={styles.textFauxs}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            doloremque recusandae officia
          </p>
          <button>
            Read more
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>
        <div className={styles.icons}>
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaFacebookSquare />
          </span>
          <span>
            <FaInstagramSquare />
          </span>
        </div>
        <div className={styles.textFaux}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
            doloremque recusandae officia
          </p>
          <button>
            Read more
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </button>
        </div>
      </section>
    </main>
  );
}
