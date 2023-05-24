import styles from "../app/styles.module.css";

import { useEffect } from "react";
import { useState } from "react";

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

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // store items in API
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    alert(`Is this the data from the form: ${result.data}`);
  };

  const [items, setItems] = useState([{ title: "initial title" }]);

  useEffect(() => {
    const fetcher = async () => {
      console.log("fetcher tirggered");
      const response = await fetch("/api/items");
      const jsonData = await response.json();
      console.log(`items retrieved ${JSON.stringify(jsonData.data)}`);
      setItems(jsonData.data);
    };

    fetcher();
  }, []);

  return (
    // We pass the event to the handleSubmit() function on submit.
    <div className={styles.createWardrobeWrapper}>
      <div className={styles.form}>
        <h3>Add your first item to the wardrobe</h3>
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
          return <img width={100} height={100} key={i} src={item.url} />;
        })}
      </div>
    </div>
  );
}
