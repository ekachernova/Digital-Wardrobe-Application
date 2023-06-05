import { useDrop } from "react-dnd";
import styles from "../../styles.module.css";
import { useSnapshot } from "valtio";
import { storeVariables } from "@/store/storeVariables";
import { useEffect } from "react";

export default function Bucket({ id }) {
  const globalBucket = storeVariables.globalBucket;
  const globalBucketSnapshot = useSnapshot(globalBucket);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "Box",
    drop: (item) => addItemToTheBucket(item),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const updateBucketItem = async (id) => {
    console.log(`about to retrieve item by: ${id}`);
    const response = await fetch(`/api/items/${id}`);
    const item = await response.json();

    console.log(`have got item ${item}`);
    globalBucket.push(item);
  };

  const addItemToTheBucket = (item) => {
    console.log("Im here " + item.id);
    updateBucketItem(item.id);
    // globalBucket.push({ id: item.id });
  };

  const handleSaveOutfit = async () => {
    console.log("i am saving outfits!");
    const idMap = globalBucket.map((item) => item._id);
    console.log("map:", idMap);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(idMap),
    };

    // store items in API
    const response = await fetch("/api/outfits", options);
  };

  useEffect(() => {
    async function getOutfit() {
      const response = await fetch("/api/outfits");
      const json = await response.json();
      const latestOutfit = json.data?.[0];
      console.log("latestOutfit", latestOutfit);
      const itemIds = latestOutfit?.itemIds;

      const resp = await fetch(`/api/items?ids=${itemIds.toString()}`);
      const initialItems = await resp.json();

      storeVariables.globalBucket = initialItems.data;
    }
    // getOutfit();
  }, []);

  return (
    <div ref={drop} role={"Dustbin"} className={styles.outfitSection} id={id}>
      {globalBucketSnapshot.map((item) => (
        <div key={item._id}>
          <img src={item.url} width={140} height={160} />
        </div>
      ))}
      {/* <button onClick={handleSaveOutfit}>Save outfit</button> */}
    </div>
  );
}
