"use client";

import { useRouter } from "next/navigation";

import classes from "./notfound.module.css";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <main className={classes.notFoundContainer}>
      <div className={classes.illustration}>🔍</div>
      <h1>Page Not Found</h1>
      <p>Oops! The page you're looking for doesn't exist or has been moved.</p>
      <button className={classes.homeButton} onClick={() => router.push("/")}>
        Go Home
      </button>
    </main>
  );
};

export default NotFoundPage;
