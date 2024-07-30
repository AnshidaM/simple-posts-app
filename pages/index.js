import React, { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-utils";
import Head from "next/head";

const HomePage = (props) => {
  //   const DUMMY_POSTS = [
  //     {
  //       slug: "getting-started-with-nextjs1",
  //       title: "Getting Started with NextJS",
  //       image: "getting-started-nextjs.png",
  //       date: "2022-02-10",
  //       excerpt:
  //         "NextJS is the React framework for prouction -It makes building fullstack React apps and sites a breeze and ships with built-in SSR ",
  //     },
  //     {
  //       slug: "getting-started-with-nextjs2",
  //       title: "Getting Started with NextJS",
  //       image: "getting-started-nextjs.png",
  //       date: "2022-02-10",
  //       excerpt:
  //         "NextJS is the React framework for prouction -It makes building fullstack React apps and sites a breeze and ships with built-in SSR ",
  //     },
  //     {
  //       slug: "getting-started-with-nextjs3",
  //       title: "Getting Started with NextJS",
  //       image: "getting-started-nextjs.png",
  //       date: "2022-02-10",
  //       excerpt:
  //         "NextJS is the React framework for prouction -It makes building fullstack React apps and sites a breeze and ships with built-in SSR ",
  //     },
  //     ,
  //     {
  //       slug: "getting-started-with-nextjs4",
  //       title: "Getting Started with NextJS",
  //       image: "getting-started-nextjs.png",
  //       date: "2022-02-10",
  //       excerpt:
  //         "NextJS is the React framework for prouction -It makes building fullstack React apps and sites a breeze and ships with built-in SSR ",
  //     },
  //   ];
  return (
    <Fragment>
      <Head>
        <title>Max' Blog</title>
        <meta
          name="decsription"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

export default HomePage;

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
  };
}
