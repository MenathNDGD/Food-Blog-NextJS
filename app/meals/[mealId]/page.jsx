import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import classes from "./page.module.css";

import { getMealDetails } from "@/lib/meals";

const MealDetailsPage = ({ params }) => {
  const meal = getMealDetails(params.mealId);

  if (!meal) {
    notFound();
  }

  const imageUrl = `${process.env.NEXT_PUBLIC_AWS_S3_BUCKET_URL}/${meal.image}`;

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={imageUrl} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <Link href={`mailto:${meal.creator_email}`}>{meal.creator}</Link>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions.replace(/\n/g, "<br />"),
          }}
        ></p>
      </main>
    </>
  );
};

export default MealDetailsPage;
