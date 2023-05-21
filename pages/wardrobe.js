import styles from "../app/styles.module.css";
import { useRef } from "react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";

// this array created for testing reasons. will be change to database data
// const clothingItems = [
//   {
//     id: 1,
//     name: "jeans",
//     type: "buttom",
//     url: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff8%2F59%2Ff8598189a5a9b9a1ef8db78ff80b57df18e6e35c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bladies_divided_new_clothes%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
//   },
//   {
//     id: 2,
//     name: "t-shirt",
//     type: "top",
//     url: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F07%2F3b%2F073bf9f8a05c2d02d6bf34f75e1ca1b65bcb75ac.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]",
//   },
// ];

export default function Wardrobe() {
  const fileInputRef = useRef();
  const myImage = new CloudinaryImage("sample", {
    cloudName: "ducxm5zce",
  }).resize(fill().width(100).height(150));

  return (
    <div className={styles.wardrobeWrapper}>
      <h3>My Wardrobe</h3>
      <div className={styles.wardrobeSection}>
        {/* <button className={styles.addItemButton} onClick={handleAddItem}>
          +
        </button> */}
        <form>
          <button
            className={styles.addItemButton}
            onClick={(event) => {
              event.preventDefault();
              fileInputRef.current.click();
            }}
          >
            {" "}
            Add Image
          </button>
          <input type="file" style={{ display: "none" }} ref={fileInputRef} />
        </form>
      </div>

      <div>
        <AdvancedImage cldImg={myImage} />
      </div>
    </div>
  );
}
