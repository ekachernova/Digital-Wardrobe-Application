"use client";

import Weather from "@/app/components/Weather/Weather";
import Wardrobe from "../app/components/Wardrobe/Wardrobe";
import { useSnapshot } from "valtio";
import { storeVariables } from "@/store/storeVariables";
import Outfits from "@/app/components/Outfits";
import { DndContext, DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function CreateWardrobe() {
  const { actualWardrobe } = useSnapshot(storeVariables);

  console.log(actualWardrobe);

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
