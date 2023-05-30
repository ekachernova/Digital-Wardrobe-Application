import Weather from "@/app/components/Weather/Weather";
import Wardrobe from "../app/components/Wardrobe/Wardrobe";
import { useSnapshot } from "valtio";
import { storeVariables } from "@/store/storeVariables";

export default function CreateWardrobe() {
  const { actualWardrobe } = useSnapshot(storeVariables);

  console.log(actualWardrobe);

  return (
    <div>
      <Weather />
      <Wardrobe />
    </div>
  );
}
