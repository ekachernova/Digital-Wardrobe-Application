"use client";
import styles from "../../page.module.css";

export default function Main() {
  function handleCreateButton() {
    console.log("clicked");
  }
  return (
    <button className={styles.button} onClick={handleCreateButton}>
      create <br></br> wardrobe
    </button>
  );
}
