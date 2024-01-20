"use client";

import styles from "../../styles.module.css";
import Link from "next/link";

export default function Main() {
  return (
    <Link href="/createwardrobe">
      <button className={styles.button}>Go to the playground</button>
    </Link>
  );
}
