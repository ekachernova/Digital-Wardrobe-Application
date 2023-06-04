import Link from "next/link";
import styles from "../app/styles.module.css";

export default function Howitworks() {
  return (
    <div>
      <br></br>
      <br></br>
      <h1>HOW IT WORKS</h1>
      <Link href="/">Back</Link>
      <section className={styles.howItWorksBlockWrapper}>
        <div className={styles.howItWorksBlock}>
          <p>Find something cool on the marketplace</p>
        </div>
        <div className={styles.howItWorksBlock}>
          <p>Add your garment to your wardrobe</p>
        </div>
        <div className={styles.howItWorksBlock}>
          <p>Create outfits!</p>
        </div>
      </section>
    </div>
  );
}
