import Link from "next/link";
import React from "react";

export const getStaticProps = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const datas = await data.json();

  return {
    props: {
      datas,
    },
  };
};

const blog = ({ datas }) => {
  return (
    <>
      {datas.slice(0, 5).map((value) => {
        return (
          <div key={value.id}>
            <Link href={"/blog/" + value.id}>
              <h1>{value.title}</h1>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default blog;
