import { useDrag } from "react-dnd";

export default function Box({ index, id, url, clickHandler }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "Box",
    item: { id },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult(id);
    },
  }));

  return (
    <img
      id={id}
      ref={drag}
      draggable
      width={100}
      height={120}
      key={index}
      src={url}
      onClick={clickHandler}
    />
  );
}
