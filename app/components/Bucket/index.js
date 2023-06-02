import { useDrop } from "react-dnd";
// import Target from "../Target";
import styles from "../../styles.module.css";

export default function Bucket({ children }) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "Box",
    drop: () => ({ name: "DropArea" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  return (
    <div ref={drop} role={"Dustbin"} className={styles.wardrobeSection}>
      {/* <Target /> */ children}
      {canDrop ? "Release to drop" : "Drag a box here"}
    </div>
  );
}
