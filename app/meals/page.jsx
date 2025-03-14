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
          Choose Your Favorite Meal &{" "}
          <span className={classes.highlight}>Enjoy</span> a{" "}
          <span className={classes.highlight}>Wonderful</span> &{" "}
          <span className={classes.highlight}>Delicious</span> Lunch or Dinner
          at Your Home.
        </p>
        <p>
          Or Share Your Own Recipes with Our Community of{" "}
          <span className={classes.highlight}>Talented Home Cooks</span> &{" "}
          <span className={classes.highlight}>Professional</span>{" "}
          <span className={classes.highlight}>Chefs!</span>
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
