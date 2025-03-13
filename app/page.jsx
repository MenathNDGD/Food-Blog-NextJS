import Link from "next/link";

import classes from "./page.module.css";

import ImageSlideShow from "@/components/images/ImageSlideShow";

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
              Taste the difference. Experience the difference. Enjoy the
              difference.
            </p>
          </div>
          <div className={classes.cta}>
            <Link href={"/community"}>Join the Community</Link>
            <Link href={"/meals"}>Explore Meals</Link>
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
