"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { CloudUpload } from "lucide-react";

import classes from "./ImagePicker.module.css";

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState(null);
  const imageInputRef = useRef();

  function handlePickImage() {
    imageInputRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => setPickedImage(fileReader.result);
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage ? (
            <p>No image selected</p>
          ) : (
            <Image
              src={pickedImage}
              alt="Picked Image"
              fill
              className={classes.image}
            />
          )}
        </div>
        <input
          type="file"
          name={name}
          id={name}
          ref={imageInputRef}
          accept=".jpg,.jpeg,.png"
          className={classes.input}
          onChange={handleImageChange}
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickImage}
        >
          <CloudUpload size={18} /> Pick Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
