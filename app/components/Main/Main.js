import styles from "../../page.module.css";
import Image from "next/image";

export default function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.mainDisclaimer}>
        <Image
          className={styles.mainImage}
          src="/../public/images/alexandra-gorn-WF0LSThlRmw-unsplash (1).jpg"
          alt="Wardrobe picture"
          width={500}
          height={400}
        />
        <div className={styles.mainButtonContainer}>
          <button className={styles.button}>
            create <br></br> wardrobe
          </button>
        </div>
      </section>
    </main>
  );
}
