import { Suspense } from "react";
import Link from "next/link";

import classes from "./page.module.css";

import MealsGrid from "@/components/Meals/MealsGrid";
import { getMeals } from "@/lib/meals";

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious Meals, Created{" "}
          <span className={classes.highlight}>By You!</span>
        </h1>
        <p>
          Choose your favorite meal and enjoy a delicious lunch or dinner at
          home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced
          <span className={classes.highlight}> chefs!</span>
        </p>
        <p className={classes.cta}>
          <Link href={"/meals/share"}>Share Your Favorite Recipe!</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={
            <div className={classes.loaderContainer}>
              <div className={classes.spinner}></div>
              <p className={classes.loadingText}>Fetching Meals...</p>
            </div>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
