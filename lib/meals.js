import fs from "node:fs";

import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("Couldn't fetch the meals");
  return db.prepare("SELECt * FROM meals").all();
}

export function getMealDetails(mealId) {
  return db.prepare("SELECT * FROM meals WHERE mealId = ?").get(mealId);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  if (!meal.image || typeof meal.image !== "object") {
    throw new Error("Invalid image format");
  }

  const extension = meal.image.name ? meal.image.name.split(".").pop() : "jpg";
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Failed to save the image");
    }
  });

  meal.image = `/images/${fileName}`;

  db.prepare(
    `INSERT INTO meals 
      (title, summary, instructions, creator, creator_email, image, mealId) 
    VALUES 
      (@title, @summary, @instructions, @creator, @creator_email, @image, @mealId)`
  ).run(meal);
}
