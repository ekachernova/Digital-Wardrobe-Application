"use client";

import Weather from "@/app/components/Weather";
import Wardrobe from "../app/components/Wardrobe";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from "../app/styles.module.css";

export default function CreateWardrobe() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.wardrobeAndOutfitsWrapper}>
        {/* <Weather /> */}
        <Wardrobe />
      </div>
    </DndProvider>
  );
}
