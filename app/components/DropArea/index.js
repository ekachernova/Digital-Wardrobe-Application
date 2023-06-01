import { useDrop } from "react-dnd";
import TargetOutfit from "../TargetOutfit";

export default function DropArea() {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "Card",
    drop: () => ({ name: "DropArea" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;

  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }
  return (
    <div ref={drop}>
      <TargetOutfit />
    </div>
  );
}
