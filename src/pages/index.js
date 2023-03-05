import React from "react";
import Nav from "./component/Nav";
import Head from "next/head";

const index = () => {
  return (
    <>
      <Head>
        <title>hello world</title>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Nav />
    </>
  );
};

export default index;
