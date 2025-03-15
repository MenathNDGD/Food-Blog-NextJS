import classes from "./page.module.css";

import ImagePicker from "@/components/Meals/ImagePicker";

const ShareMealPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share Your{" "}
          <span className={classes.highlight}>Favorite Meal Recipe</span> With
          The Foodies Community!
        </h1>
        <p>Or Any Other Meal You Feel Needs Sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker />
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
};

export default ShareMealPage;
