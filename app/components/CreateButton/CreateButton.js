"use client";
import styles from "../../styles.module.css";
import Link from "next/link";

export default function Main() {
  function handleCreateButton() {
    console.log("clicked");
  }
  return (
    //link changed for testing form

    <Link href="/createwardrobe">
      <button className={styles.button}>
        create <br></br> wardrobe
      </button>
    </Link>
  );
}
