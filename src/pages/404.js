import Link from "next/link";
import Router from "next/router";
import React from "react";
import { useEffect } from "react";

const Error = () => {
  useEffect(() => {
    setTimeout(() => {
      Router.push("/");
    }, 2000);
  }, []);

  return (
    <>
      <h1>eroor page not found return to</h1>
      <Link href="/">home page</Link>
    </>
  );
};

export default Error;
