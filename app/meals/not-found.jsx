"use client";

import { useRouter } from "next/navigation";

import classes from "./notfound.module.css";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <main className={classes.notFoundContainer}>
      <div className={classes.illustration}>🔍</div>
      <h1>Meal not found </h1>
      <p>
        The meal you are looking for is not available. Please check the URL and
        try again.
      </p>
      <button
        className={classes.homeButton}
        onClick={() => router.push("/meals")}
      >
        Go back to meals
      </button>
    </main>
  );
};

export default NotFoundPage;
