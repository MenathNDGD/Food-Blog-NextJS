"use server";

import { redirect } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

import { saveMeal } from "./meals";

export async function shareMeal(formData) {
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    mealId: uuidv4(),
  };

  await saveMeal(meal);
  redirect("/meals");
}
