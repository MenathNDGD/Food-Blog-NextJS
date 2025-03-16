import Link from "next/link";
import Image from "next/image";
import { ArrowRightCircle } from "lucide-react";

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
          <Link href={`/meals/${mealId}`} className={classes.viewRecipe}>
            View Recipe <ArrowRightCircle size={20} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default MealItem;
