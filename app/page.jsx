import Link from "next/link";

import classes from "./page.module.css";

import ImageSlideShow from "@/components/ImageSlideShow/ImageSlideShow";

const HomePage = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideShow />
        </div>

        <div>
          <div className={classes.hero}>
            <h1>Welcome to DeliCasa Food. The Best Place for Foodies.</h1>
            <p>
              Welcome to DeliCasa – Where flavors tell stories, and every dish
              feels like home!
            </p>
            <p>
              Savor the taste, embrace the journey – DeliCasa, your go-to food
              haven!
            </p>
            <p>
              Cooking with love, serving with passion – Experience DeliCasa!
            </p>
          </div>
          <div className={classes.cta}>
            <Link href={"/community"}>Join the Community</Link>
            <Link href={"/meals"}>Explore Our Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How It Works?</h2>
          <p>
            DeliCasa Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            DeliCasa Food is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>

        <section className={classes.section}>
          <h2>Why DeliCasa Food?</h2>
          <p>
            DeliCasa Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            DeliCasa Food is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>
      </main>
    </>
  );
};

export default HomePage;
