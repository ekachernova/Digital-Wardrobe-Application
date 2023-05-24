import styles from "../app/styles.module.css";
import { useState } from "react";
import Image from "next/image";
import { useRef } from "react";
import { useEffect } from "react";

export default function Wardrobe() {
  // const [imageSrc, setImageSrc] = useState();
  // const [uploadData, setUploadData] = useState();

  // const fileInputRef = useRef();

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);

    // for multiple files

    /*
    for (const file of e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImageSrc((imgs) => [...imgs, reader.result]);
      };
      reader.onerror = () => {
        console.log(reader.error);
      };
    }
    */
  }

  /**
   * handleOnSubmit
   * @description Triggers when the main form is submitted
   */

  async function handleOnSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === "file"
    );

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append("file", file);
    }

    formData.append("upload_preset", "zy29pond");

    const data = await fetch(
      "https://api.cloudinary.com/v1_1/ducxm5zce/image/upload",
      {
        method: "POST",
        body: formData,
      }
    ).then((r) => r.json());

    setImageSrc(data.secure_url);
    setUploadData(data);

    console.log(data);
  }

  return (
    <div className={styles.wardrobeWrapper}>
      <h3>Add your item to your wardrobe</h3>
      <br></br>
      <form className={styles.form}>
        {/* <label htmlFor="item-title">Title:</label>
        <input type="input" name="item-title"></input>
        <br></br>
        <br></br>
        <label htmlFor="item-type">Type:</label>
        <input type="type" name="item-type"></input> */}
        {/* <br></br>
        <br></br>
        <button
          className={styles.addItemButton}
          onClick={(event) => {
            event.preventDefault();
            fileInputRef.current.click();
          }}
        >
          choose item
        </button>
        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          onChange={handleOnChange}
        ></input> */}
        <br></br>
        <button className={styles.submitButton} onSubmit={handleOnSubmit}>
          add item
        </button>
      </form>

      <div className={styles.wardrobeSection}>
        {/* {imageSrc && uploadData && (
          <p>
            <Image src={imageSrc} alt="item" width={150} height={250} />
          </p>
        )} */}

        {/* {imageSrc && !uploadData && (
          <p>There are no items still in your wardrobe</p>
        )} */}
      </div>
    </div>
  );
  // return (
  //   <div className={styles.wardrobeWrapper}>
  //     <h3>My Wardrobe</h3>
  //     <div className={styles.wardrobeSection}>
  //       <form
  //         className={styles.form}
  //         method="post"
  //         onChange={handleOnChange}
  //         onSubmit={handleOnSubmit}
  //       >
  //         <p>
  //           <button
  //             className={styles.addItemButton}
  //             onClick={(event) => {
  //               event.preventDefault();
  //               fileInputRef.current.click();
  //             }}
  //           >
  //             {" "}
  //             Add Item
  //           </button>
  //           <input
  //             type="file"
  //             name="file"
  //             style={{ display: "none" }}
  //             ref={fileInputRef}
  //           />
  //         </p>
  //         {imageSrc && uploadData && (
  //           <p>
  //             <Image src={imageSrc} alt="item" width={150} height={250} />
  //           </p>
  //         )}

  //         {imageSrc && !uploadData && (
  //           <p>
  //             <button>Add item to your wardrobe</button>
  //           </p>
  //         )}

  //         {uploadData && (
  //           <code>
  //             <pre>{JSON.stringify(uploadData, null, 2)}</pre>
  //           </code>
  //         )}
  //       </form>
  //     </div>
  //   </div>
  // );
}
