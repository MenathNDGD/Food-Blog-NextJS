"use client";

import Head from "next/head";
import { useFormState } from "react-dom";

import classes from "./page.module.css";

import ImagePicker from "@/components/Meals/ImagePicker";
import MealsFormSubmit from "@/components/Meals/MealsFormSubmit";

import { shareMeal } from "@/lib/actions";

const ShareMealPage = () => {
  const [state, formAction] = useFormState(shareMeal, { errors: {} });

  return (
    <>
      <Head>
        <title>Share Your Meal Recipe</title>
        <meta
          name="description"
          content="Share your favorite meal recipes with the Foodies Community. Join us and inspire others with your cooking!"
        />
        <meta
          name="keywords"
          content="share meal, recipe, food community, cooking"
        />
        <meta property="og:title" content="Share Your Meal Recipe" />
        <meta
          property="og:description"
          content="Share your favorite meal recipes with the Foodies Community. Join us and inspire others with your cooking!"
        />
      </Head>
      <header className={classes.header}>
        <h1>
          Share Your{" "}
          <span className={classes.highlight}>Favorite Meal Recipe</span> With
          The Foodies Community!
        </h1>
        <p>Or Any Other Meal You Feel Needs Sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" />
              {state.errors?.creator && (
                <span className={classes.error}>{state.errors.creator}</span>
              )}
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" />
              {state.errors?.creator_email && (
                <span className={classes.error}>
                  {state.errors.creator_email}
                </span>
              )}
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
            {state.errors?.title && (
              <span className={classes.error}>{state.errors.title}</span>
            )}
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" />
            {state.errors?.summary && (
              <span className={classes.error}>{state.errors.summary}</span>
            )}
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
            ></textarea>
            {state.errors?.instructions && (
              <span className={classes.error}>{state.errors.instructions}</span>
            )}
          </p>
          <ImagePicker label="Your Image for the Meal here" name="image" />
          {state.errors?.image && (
            <span className={classes.error}>{state.errors.image}</span>
          )}
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
};

export default ShareMealPage;
