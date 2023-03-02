import React from "react";

export const getStaticPaths = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const datas = await data.json();

  const paths = datas.map((value) => {
    return {
      params: {
        blogs: value.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.blogs;
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const datas = await data.json();

  return {
    props: {
      datas,
    },
  };
};

const blogs = ({ datas }) => {
  return (
    <>
      <div>{datas.id}</div>
      <h1>{datas.title}</h1>
    </>
  );
};

export default blogs;
