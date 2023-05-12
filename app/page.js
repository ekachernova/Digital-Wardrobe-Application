import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <h2>GETYOURWARDROBE .</h2>
        </div>
        <div className={styles.menu}>
          <ul>
            <li className={styles.menuItem}>Home</li>
            <li className={styles.menuItem}>How it works</li>
            <li className={styles.menuItem}>Blog</li>
          </ul>
        </div>
      </header>
      <main className={styles.main}>
        <div>
          <p>IMAGE SECTION</p>
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
