"use client";

import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

import classes from "./MealsFormSubmit.module.css";

const MealsFormSubmit = () => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className={classes.submitBtn}>
      {pending ? (
        <>
          <Loader2 className={classes.spinner} />
          <span>Sharing...</span>
        </>
      ) : (
        "Share Meal"
      )}
    </button>
  );
};

export default MealsFormSubmit;
