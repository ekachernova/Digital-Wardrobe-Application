import styles from "../../styles.module.css";
import Image from "next/image";
import CreateButton from "../CreateButton/index.js";
import LoginBtn from "../Login-btn/login-btn";

export default function Main() {
  return (
    <main className={styles.main}>
      <section className={styles.mainDisclaimer}>
        <Image
          className={styles.mainImage}
          src="/../public/images/main_image.jpg"
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
