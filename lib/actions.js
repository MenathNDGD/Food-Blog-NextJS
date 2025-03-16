"use server";

import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

import { saveMeal } from "./meals";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState, formData) {
  const errors = {};

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    mealId: uuidv4(),
  };

  if (isInvalidText(meal.title)) errors.title = "Title is required!";
  if (isInvalidText(meal.summary)) errors.summary = "Summary is required!";
  if (isInvalidText(meal.instructions))
    errors.instructions = "Instructions are required!";
  if (isInvalidText(meal.creator)) errors.creator = "Your name is required!";

  if (isInvalidText(meal.creator_email)) {
    errors.creator_email = "Email is required!";
  } else if (!meal.creator_email.includes("@")) {
    errors.creator_email = "Invalid email format!";
  }

  if (!meal.image || meal.image.size === 0) {
    errors.image = "Image is required!";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  await saveMeal(meal);
  redirect("/meals");
}
