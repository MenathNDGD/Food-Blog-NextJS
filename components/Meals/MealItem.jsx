import Link from "next/link";
import Image from "next/image";

import classes from "./MealItem.module.css";

const MealItem = ({ title, mealId, image, summary, creator }) => {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${mealId}`}>View Recipe</Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
