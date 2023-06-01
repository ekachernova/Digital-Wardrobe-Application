import styles from "../../styles.module.css";
import { useState } from "react";
import { useEffect } from "react";
import { storeVariables } from "@/store/storeVariables";
import { useSnapshot } from "valtio";
import Card from "../Card";

export default function WardrobeArea({ showFilter, handler }) {
  const { globalWeather } = useSnapshot(storeVariables);
  console.log("global weather", globalWeather);
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
  function handelFilterButton(event) {
    if (globalWeather.current.temp_c >= 15) {
      // console.log("filter is on");
      setItems((items) =>
        items.filter((item) => item.season === "all" || item.season === "warm")
      );
    }
    if (
      globalWeather.current.temp_c >= 15 &&
      globalWeather.current.condition.code >= 1063
    ) {
      // console.log("filter is on");
      setItems((items) =>
        items.filter(
          (item) => item.season === "all" || item.season === "warm-rainy"
        )
      );
    }
    if (globalWeather.current.temp_c < 15) {
      // console.log("filter is on");
      setItems((items) =>
        items.filter((item) => item.season === "all" || item.season === "cold")
      );
    }
    if (
      globalWeather.current.temp_c < 15 &&
      globalWeather.current.condition.code >= 1063
    ) {
      // console.log("filter is on");
      setItems((items) =>
        items.filter(
          (item) => item.season === "all" || item.season === "cold-rainy"
        )
      );
    }

    return;
  }
  return (
    <>
      {!showFilter ? (
        <div>
          <button className={styles.filterButton} onClick={handelFilterButton}>
            Sync your wardrobe!
          </button>
        </div>
      ) : (
        <div></div>
      )}

      <div className={styles.wardrobeSection}>
        {items.map((item, i) => {
          return (
            <>
              <Card
                clickHandler={handleDeleteItem(item._id)}
                url={item.url}
                index={i}
                handler={handler}
              />
            </>
          );
        })}
      </div>
    </>
  );
}
