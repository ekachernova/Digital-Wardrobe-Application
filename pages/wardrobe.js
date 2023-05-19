import styles from "../app/styles.module.css";

export default function Wardrobe() {
  return (
    <div className={styles.wardrobeWrapper}>
      <h3>My Wardrobe</h3>
      <div className={styles.wardrobeSection}>
        <button className={styles.addItemButton}>+</button>
      </div>
    </div>
  );
}
