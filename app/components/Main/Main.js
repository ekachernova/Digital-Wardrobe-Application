import styles from "../../page.module.css";
import Image from "next/image";
import CreateButton from "../CreateButton/CreateButton.js";

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
          <CreateButton />
        </div>
      </section>
    </main>
  );
}
