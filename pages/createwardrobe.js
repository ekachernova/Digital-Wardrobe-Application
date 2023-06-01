"use client";

import Weather from "@/app/components/Weather";
import Wardrobe from "../app/components/Wardrobe";
import Outfits from "@/app/components/Outfits";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function CreateWardrobe() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Weather />
        <Wardrobe />
        <Outfits />
      </div>
    </DndProvider>
  );
}
