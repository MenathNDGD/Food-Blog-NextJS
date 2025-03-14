"use client";

import { useRouter } from "next/navigation";

import classes from "./error.module.css";

const MealsErrorPage = () => {
  const router = useRouter();

  return (
    <main className={classes.errorContainer}>
      <div className={classes.illustration}>🍽️</div>
      <h1>Oops! Something went wrong.</h1>
      <p>We couldn't fetch the meals. Please try again later.</p>
      <button className={classes.retryButton} onClick={() => router.refresh()}>
        Try Again
      </button>
    </main>
  );
};

export default MealsErrorPage;
