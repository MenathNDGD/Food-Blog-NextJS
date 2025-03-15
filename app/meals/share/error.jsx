"use client";

import { useRouter } from "next/navigation";

import classes from "./error.module.css";

const MealsErrorPage = () => {
  const router = useRouter();

  const handleRetry = () => {
    router.push("/meals");
  };

  return (
    <main className={classes.errorContainer}>
      <div className={classes.illustration}>⚠️</div>
      <h1>Oops! Form submission failed.</h1>
      <p>Please make sure all fields are filled correctly and try again.</p>
      <button className={classes.retryButton} onClick={handleRetry}>
        Try Again
      </button>
    </main>
  );
};

export default MealsErrorPage;
