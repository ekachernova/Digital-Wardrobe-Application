import { useDrop } from "react-dnd";
// import Target from "../Target";
import styles from "../../styles.module.css";
import { useSnapshot } from "valtio";
import { storeVariables } from "@/store/storeVariables";

export default function Bucket({ children, id }) {
  const globalBucket = storeVariables.globalBucket;
  const globalBucketSnapshot = useSnapshot(globalBucket);
  // console.log(globalBucket);
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
    console.log("Im here" + item.id);
    updateBucketItem(item.id);
    // globalBucket.push({ id: item.id });
  };

  return (
    <div ref={drop} role={"Dustbin"} className={styles.wardrobeSection} id={id}>
      {globalBucketSnapshot.map((item) => (
        <>
          <img src={item.url} width={100} height={120} />
        </>
      ))}
      <br />
      {isOver ? "Create your outfit here" : "How do you like your outfit?"}
    </div>
  );
}
