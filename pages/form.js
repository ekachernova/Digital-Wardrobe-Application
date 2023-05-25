import { useRouter } from "next/router";
import styles from "../app/styles.module.css";

import { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";

export default function Form() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get data from the form.
    const data = {
      title: event.target.title.value,
      category: event.target.category.value,
      url: event.target.url.value,
    };

    // Send the data to the server in JSON format.
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
    // alert(`Is this the data from the form: ${result.data}`);
  };

  const [items, setItems] = useState([{ title: "initial title" }]);

  useEffect(() => {
    const fetcher = async () => {
      // console.log("fetcher is working");
      const response = await fetch("/api/items");
      const jsonData = await response.json();
      // console.log(`items retrieved ${JSON.stringify(jsonData.data)}`);
      setItems(jsonData.data);
    };

    fetcher();
  }, []);

  const router = useRouter();
  const { id } = router.query;

  async function handleDeleteItem() {
    await fetch(`/api/items/${id}`, {
      method: "DELETE",
    });
  }
  return (
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
              height={100}
              key={i}
              src={item.url}
              onClick={handleDeleteItem}
            />
          );
        })}
      </div>
    </div>
  );
}
