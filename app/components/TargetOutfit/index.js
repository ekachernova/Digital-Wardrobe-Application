import { useState } from "react";
import styles from "../../styles.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Card from "../Card";
import { useEffect } from "react";

export default function TargetOutfit() {
  const [items, setItems] = useState([{ title: "initial title" }]);

  const syncItems = async () => {
    // console.log("fetcher is working");
    const response = await fetch("/api/items");
    const jsonData = await response.json();
    // console.log(`items retrieved ${JSON.stringify(jsonData.data)}`);
    setItems(jsonData.data);
  };

  useEffect(() => {
    syncItems();
  }, []);

  function handleDeleteItem(id) {
    console.log(`wrapper for delete image handler with id: ${id}`);
    return async () => {
      console.log(`handler with id: ${id}`);
      await fetch(`/api/items/${id}`, {
        method: "DELETE",
      });
      // can be a call to syncItems() instead
      setItems((items) => items.filter((i) => i._id != id));
    };
  }

  const [ids, setIds] = useState([]);

  const handler = (id) => {
    setIds((ids) => [...ids, id]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.wardrobeSection}>
        {items.map((id, item) => {
          return (
            <Card
              key={1}
              id={id}
              handler={handler}
              url={item.url}
              width={100}
              height={120}
            />
          );
        })}
      </div>
    </DndProvider>
  );
}
