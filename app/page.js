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
        <div>
          <Image
            src="https://source.unsplash.com/photos/WF0LSThlRmw"
            alt="Wardrobe picture"
            width={800}
            height={500}
          />
        </div>
        <div>
          <button className={styles.button}>
            create your digital wardrobe!
          </button>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.copyright}>
          <p>COPYRIGHT SECTION</p>
        </div>
        <div>
          <p>Contacts and quick menu section</p>
        </div>
      </footer>
    </>
  );
}
