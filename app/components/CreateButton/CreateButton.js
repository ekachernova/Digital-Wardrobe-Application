"use client";
import styles from "../../page.module.css";
import Link from "next/link";

export default function Main() {
  function handleCreateButton() {
    console.log("clicked");
  }
  return (
    <Link href="/wardrobe">
      <button className={styles.button}>
        create <br></br> wardrobe
      </button>
    </Link>
  );
}
