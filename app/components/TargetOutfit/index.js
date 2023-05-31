import { useState } from "react";
import styles from "../../styles.module.css";
import Card from "../Card";

export default function TargetOutfit() {
  const { items, setItems } = useState([]);

  return (
    <div className={styles.wardrobeSection}>
      {/* {items.map((item, i) => {
        return (
          <>
            <Card
              clickHandler={handleDeleteItem(item._id)}
              url={item.url}
              index={i}
            />
          </>
        );
      })} */}
    </div>
  );
}
