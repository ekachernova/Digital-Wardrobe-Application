import styles from "../../page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h2>GETYOURWARDROBE .</h2>
      </div>
      <div className={styles.menu}>
        <ul>
          <a href="#">
            <li className={styles.menuItem}>Home</li>
          </a>
          <a href="#">
            <li className={styles.menuItem}>How it works</li>
          </a>
          <a href="#">
            <li className={styles.menuItem}>Blog</li>
          </a>
          <a href="#">
            <li className={styles.menuItem}>Contacts</li>
          </a>
        </ul>
      </div>
    </header>
  );
}
