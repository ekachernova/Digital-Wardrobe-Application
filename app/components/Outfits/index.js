import styles from "../../styles.module.css";
import WardrobeArea from "../WardrobeArea";
import DropArea from "../DropArea";

export default function Outfits({ ids }) {
  return (
    <div className={styles.outfitsSection}>
      <WardrobeArea className={styles.dragArea} showFilter={true} ids={ids} />
      <DropArea className={styles.dropArea} ids={ids} />
    </div>
  );
}
