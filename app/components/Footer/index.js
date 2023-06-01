import styles from "../../styles.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        {/* <p>&copy; getyourwardrobe</p> */}
      </div>
      <div className={styles.footerMenu}>
        <ul>
          <a href="#">
            <li className={styles.menuItem}>Instagram</li>
          </a>
          <a href="#">
            <li className={styles.menuItem}>Facebook</li>
          </a>
          <a href="#">
            <li className={styles.menuItem}>Blog</li>
          </a>
          <a href="#">
            <li className={styles.menuItem}>Contacts</li>
          </a>
        </ul>
      </div>
    </footer>
  );
}
