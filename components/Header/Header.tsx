"use client";
import React, { useState } from "react";
import styles from "@/components/Header/Header.module.css";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  const [isMenu, setIsMenu] = useState(false);

  const handleClick = () => {
    setIsMenu(!isMenu);
  };
  return (
    <div>
      <main className={styles.header}>
        <section className={styles.hamburger} onClick={handleClick}>
          <span className="material-symbols-outlined">menu</span>
        </section>
        <section className={styles.logo}>
          <p>japan world</p>
        </section>
        {
          <section
            className={`${styles.navbar} ${isMenu ? styles.active : ""}`}
          >
            <li onClick={handleClick}>
              <Link href="#about">About</Link>
            </li>
            <li onClick={handleClick}>
              <Link href="#explores">Explores</Link>
            </li>
            <li onClick={handleClick}>
              <Link href="#blog">Blogs</Link>
            </li>
            <li onClick={handleClick}>
              <Link href="#contact">Contact</Link>
            </li>
          </section>
        }
        <section className={styles.search}>
          <CiSearch />
        </section>
      </main>
    </div>
  );
}
