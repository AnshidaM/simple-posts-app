import React from "react";
import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/cat1.jpg"
          alt="An Image showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi , I'm Max</h1>
      <p>
        I blogabout web development - especially front end frameworks like
        Angluar or React
      </p>
    </section>
  );
};

export default Hero;
