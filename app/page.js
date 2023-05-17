import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <footer className={styles.footer}>
        <div className={styles.copyright}>
          <p>&copy; getyourwardrobe</p>
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
    </>
  );
}
