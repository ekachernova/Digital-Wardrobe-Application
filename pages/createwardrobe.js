"use client";

import Wardrobe from "../app/components/Wardrobe";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from "../app/styles.module.css";

export default function CreateWardrobe() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.wardrobeAndOutfitsWrapper}>
        <Wardrobe />
      </div>
    </DndProvider>
  );
}
