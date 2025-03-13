import Link from "next/link";

import classes from "./page.module.css";

import MealsGrid from "@/components/Meals/MealsGrid";

const MealsPage = () => {
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
        <MealsGrid meals={[]} />
      </main>
    </>
  );
};

export default MealsPage;
