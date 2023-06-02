import { useDrag } from "react-dnd";
import { useSnapshot } from "valtio";
import { storeVariables } from "@/store/storeVariables";

export default function Box({ i, url, clickHandler, id }) {
  const { globalWardrobe } = useSnapshot(storeVariables);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "Box",
    item: { id },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult(id);
      if (item && dropResult) {
        alert(`You dropped ${item.id} into ${dropResult.id}!`);
      }
    },
  }));

  return (
    <img
      id={id}
      ref={drag}
      draggable
      width={100}
      height={120}
      key={i}
      src={url}
      onClick={clickHandler}
    />
  );
}
