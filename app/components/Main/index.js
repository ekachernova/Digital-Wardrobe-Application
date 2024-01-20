import styles from "../../styles.module.css";
import Image from "next/image";
import CreateButton from "../CreateButton/index.js";

export default function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.mainDisclaimer}>
        <div className={styles.mainText}>
          <p>
            Do you know that your wardrobe is your constructor? Well, you are in
            the right place!
          </p>
        </div>
        <div>
          <Image
            className={styles.mainImage}
            src="/images/amanda-vick-ohWf6YuzOQk-unsplash.jpg"
            alt="Wardrobe picture"
            width={500}
            height={500}
          />
        </div>
        <div className={styles.mainButtonContainer}>
          <CreateButton />
        </div>
      </section>
    </main>
  );
}
