import { useDrag } from "react-dnd";

export default function Card({ i, url, clickHandler }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "Card",
    item: { url },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.url} into ${dropResult.url}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <div ref={drag}>
      <img
        draggable
        width={100}
        height={120}
        key={i}
        src={url}
        onClick={clickHandler}
      />
    </div>
  );
}
