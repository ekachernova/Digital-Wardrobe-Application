import { useRouter } from "next/router";
import styles from "../app/styles.module.css";

import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import Weather from "@/app/components/Weather/Weather";

export default function Form() {
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
      <Weather />
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
