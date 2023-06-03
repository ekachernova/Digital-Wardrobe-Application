import styles from "../../styles.module.css";
import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { storeVariables } from "@/store/storeVariables";
import { useSnapshot } from "valtio";
import Box from "../Box";
import Weather from "../Weather";
// import Outfits from "../Outfits";
import Bucket from "../Bucket";

export default function Wardrobe({ key }) {
  const { globalWeather } = useSnapshot(storeVariables);
  const { globalBucket } = useSnapshot(storeVariables);

  console.log("global weather", globalWeather);
  // console.log("global wardrobe", globalWardrobe);

  const { bucket, setBucket } = useState([]);

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

    console.log(data);
    // Send data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    // API endpoint where we send form data.
    const endpoint = "/api/items";

    // store items in API
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    syncItems();
  };

  const [items, setItems] = useState([{ title: "initial title" }]);

  const syncItems = async () => {
    // console.log("fetcher is working");
    const response = await fetch("/api/items");
    const jsonData = await response.json();
    // console.log(`items retrieved ${JSON.stringify(jsonData.data)}`);
    setItems(jsonData.data);
    storeVariables.globalWardrobe = items;
  };

  useEffect(() => {
    syncItems();
  }, []);

  const router = useRouter();
  const { id } = router.query;

  function handleDeleteItem(id) {
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
    <div>
      <div className={styles.formContainer}>
        <Weather />
        <div className={styles.form}>
          <h3>Add your clothes to the wardrobe</h3>
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
      <div>
        <button className={styles.filterButton} onClick={handelFilterButton}>
          Sync your wardrobe!
        </button>
      </div>
      <div className={styles.wardrobeAndOutfitsWrapper}>
        <div className={styles.createWardrobeWrapper}>
          <div className={styles.wardrobeSection}>
            {items.map((item, i) => {
              return (
                <Box
                  key={item._id}
                  id={item._id}
                  clickHandler={handleDeleteItem(item._id)}
                  url={item.url}
                  index={i}
                />
              );
            })}
          </div>
        </div>
        {/* <Outfits /> */}
        <Bucket key={key} />
      </div>
    </div>
  );
}
