import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("Couldn't fetch the meals");
  return db.prepare("SELECt * FROM meals").all();
}

export function getMealDetails(mealId) {
  return db.prepare("SELECT * FROM meals WHERE mealId = ?").get(mealId);
}
