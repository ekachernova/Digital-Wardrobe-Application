import { useRouter } from "next/router";
import styles from "../app/styles.module.css";

import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";

export default function Form() {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function weatherFetch() {
      const response = await fetch(
        "http://api.weatherapi.com/v1/current.json?key=1f37f1e7fbfc4a2d9f8115546232605&q=Berlin&aqi=no"
      );

      const weather = await response.json();
      setWeather(weather);
      console.log(weather);
    }
    weatherFetch();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get data from the form.
    const data = {
      title: event.target.title.value,
      category: event.target.category.value,
      url: event.target.url.value,
    };

    // Send data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/items";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

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
  };

  useEffect(() => {
    syncItems();
  }, []);

  const router = useRouter();
  const { id } = router.query;

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
  return (
    <div>
      <div className={styles.weather}>
        <img
          src={
            weather?.current?.condition === "rainy"
              ? "https://images.unsplash.com/photo-1512511708753-3150cd2ec8ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
              : "https://images.unsplash.com/photo-1604228741406-3faa38f4907a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80"
          }
          width={150}
          height={150}
        ></img>
        <div>
          <h3>{`Hello!The temperature in ${weather?.location?.name}
          today is
          ${weather?.current?.temp_c} °C`}</h3>
        </div>
      </div>
      <div className={styles.createWardrobeWrapper}>
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
        <div className={styles.wardrobeSection}>
          {items.map((item, i) => {
            return (
              <img
                width={100}
                height={120}
                key={i}
                src={item.url}
                onClick={handleDeleteItem(item._id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
