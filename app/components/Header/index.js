import styles from "../../styles.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <h2>GETYOURWARDROBE .</h2>
        </Link>
      </div>
      <div className={styles.menu}>
        <ul>
          <Link href="/">
            <li className={styles.menuItem}>Home</li>
          </Link>
          <Link href="/howitworks">
            <li className={styles.menuItem}>How it works</li>
          </Link>
          <a href="#">
            <li className={styles.menuItem}>Blog</li>
          </a>
          <Link href="#">
            <li className={styles.menuItem}>Contacts</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
