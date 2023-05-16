import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
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
      <main className={styles.main}>
        <div className={styles.mainImageContainer}>
          <Image
            className={styles.mainImage}
            src="/../public/images/alexandra-gorn-WF0LSThlRmw-unsplash (1).jpg"
            alt="Wardrobe picture"
            width={500}
            height={400}
          />
        </div>
        <div className={styles.createButtonContainer}>
          <button className={styles.button}>
            create <br></br> wardrobe
          </button>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.copyright}>
          <p>copyright</p>
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
