import styles from "../../styles.module.css";
import DropArea from "../DropArea";
import { useState } from "react";

export default function Outfits() {
  const [ids, setIds] = useState([]);
  const handler = (id) => {
    setIds((ids) => [...ids, id]);
  };
  return (
    <div className={styles.outfitsSection}>
      <DropArea className={styles.dropArea} ids={ids} />
    </div>
  );
}
