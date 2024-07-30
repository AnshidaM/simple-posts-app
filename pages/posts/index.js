import React, { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/posts-utils";
import Head from "next/head";

const AllPostPage = (props) => {
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
        <title>All Posts</title>
        <meta
          name="description"
          content="A loist of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
};

export default AllPostPage;

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}
