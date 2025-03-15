"use client";

import { useRef } from "react";
import classes from "./ImagePicker.module.css";

const ImagePicker = ({ label, name }) => {
  const imageInputRef = useRef();

  function handlePickImage() {
    imageInputRef.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          type="file"
          name={name}
          id={name}
          ref={imageInputRef}
          accept=".jpg,.jpeg,.png"
          className={classes.input}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickImage}
        >
          Pick Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
