"use client";

import styles from "../../styles.module.css";
import { useState, useEffect } from "react";
import { storeVariables } from "@/store/storeVariables";
import { useSnapshot } from "valtio";
import Box from "../Box";
import Weather from "../Weather";
import Outfits from "../Outfits";

export default function Wardrobe({ key }) {
  const { globalWeather } = useSnapshot(storeVariables);
  const [items, setItems] = useState([{ title: "initial title" }]);
  const [isFiltered, setIsFiltered] = useState(false);
  const { globalWardrobe } = storeVariables;

  useEffect(() => {
    syncItems();
  }, []);

  const syncItems = async () => {
    const response = await fetch("/api/items");
    const jsonData = await response.json();

    setItems(jsonData.data);
    storeVariables.globalWardrobe = jsonData.data;
  };

  // create new wardrobe item
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get data from the form.
    const data = {
      title: event.target.title.value,
      category: event.target.category.value,
      colour: event.target.colour.value,
      season: event.target.season.value,
      url: event.target.url.value,
    };

    const JSONdata = JSON.stringify(data);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch("/api/items", options);

    const result = await response.json();

    syncItems();
  };

  const handleDeleteItem = (id) => {
    return async () => {
      console.log(`handler with id: ${id}`);
      await fetch(`/api/items/${id}`, {
        method: "DELETE",
      });
      // can be a call to syncItems() instead
      setItems((items) => items.filter((i) => i._id != id));
      let index = globalWardrobe.findIndex((i) => i._id === id);
      delete globalWardrobe[index];
    };
  };

  const handleFilterButton = (event) => {
    if (isFiltered) {
      setIsFiltered(false);
      setItems(globalWardrobe);
    }
    if (!isFiltered) {
      setIsFiltered(true);
      if (globalWeather.current.temp_c >= 15) {
        setItems((items) =>
          items.filter(
            (item) => item.season === "all" || item.season === "warm"
          )
        );
      }
      if (
        globalWeather.current.temp_c >= 15 &&
        globalWeather.current.condition.code >= 1063
      ) {
        setItems((items) =>
          items.filter(
            (item) => item.season === "all" || item.season === "warm-rainy"
          )
        );
      }
      if (globalWeather.current.temp_c < 15) {
        setItems((items) =>
          items.filter(
            (item) => item.season === "all" || item.season === "cold"
          )
        );
      }
      if (
        globalWeather.current.temp_c < 15 &&
        globalWeather.current.condition.code >= 1063
      ) {
        setItems((items) =>
          items.filter(
            (item) => item.season === "all" || item.season === "cold-rainy"
          )
        );
      }
    }

    return;
  };

  return (
    <div>
      <div className={styles.formContainer}>
        <Weather />
        <div className={styles.form}>
          <div className={styles.howItWorksFormComment}>
            <h3>How it works</h3>
            <p>
              <strong>Step 1:</strong> Find something cool on the marketplace
            </p>
            <p>
              <strong>Step 2:</strong> Add your garment to your wardrobe by copy
              and paste the image URL
            </p>
            <p>
              <strong>Step 3:</strong> Create outfits in the outfits section
              below (please scroll the page down 😊)! Just drag and drop the
              items from the left section to the right section. Enjoy!
            </p>
          </div>
          <div>
            <h3>Choose and add your clothes</h3>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="title">Title</label>
                <br></br>
                <input type="text" id="title" name="title" required />
              </div>
              <div>
                <label htmlFor="category">Category</label>
                <br></br>
                <input type="text" id="category" name="category" required />
              </div>
              <div>
                <label htmlFor="colour">Colour</label>
                <br></br>
                <input type="text" id="colour" name="colour" required />
              </div>
              <div>
                <label htmlFor="season">Season</label>
                <br></br>
                {/* <input type="text" id="season" name="season" required /> */}
                <select name="season" id="season" required>
                  <option value="warm">warm</option>
                  <option value="cold">cold</option>
                  <option value="cold-rainy">cold rainy</option>
                  <option value="warm-rainy">warm rainy </option>
                  <option value="all">all </option>
                </select>
              </div>
              <div>
                <label htmlFor="url">URL</label>
                <br></br>
                <input type="text" id="url" name="url" required />
              </div>
              <br></br>
              <button className={styles.addItemButton} type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <button
          className={
            isFiltered ? styles.filterButtonInactive : styles.filterButton
          }
          onClick={handleFilterButton}
        >
          Sync your wardrobe!
        </button>
      </div>
      <div className={styles.wardrobeAndOutfitsWrapper}>
        <div className={styles.wardrobeSection}>
          {items.map((item, i) => {
            return (
              <Box
                id={item._id}
                url={item.url}
                key={"box_key_" + item._id}
                index={"boxed_image_key" + item._id}
                clickHandler={handleDeleteItem(item._id)}
              />
            );
          })}
        </div>
        <Outfits key={key} />
      </div>
    </div>
  );
}
