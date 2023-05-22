import styles from "../app/styles.module.css";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";

export default function Wardrobe() {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <div className={styles.wardrobeWrapper}>
      <h3>My Wardrobe</h3>
      <div className={styles.wardrobeSection}>
        <form>
          {preview ? (
            <Image
              src={preview}
              alt={"preview"}
              style={{ objectFit: "cover" }}
              width={200}
              height={300}
            />
          ) : (
            <button
              className={styles.addItemButton}
              onClick={(event) => {
                event.preventDefault();
                fileInputRef.current.click();
              }}
            >
              Add Image
            </button>
          )}

          <input
            type="file"
            style={{ display: "none" }}
            ref={fileInputRef}
            accept="image/*"
            onChange={(event) => {
              const file = event.target.files[0];
              if (file && file.type.substr(0, 5) === "image") {
                setImage(file);
              } else {
                setImage(null);
              }
            }}
          />
        </form>
      </div>
    </div>
  );
}
