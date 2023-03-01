import Router from "next/router";
import React from "react";
import { useEffect } from "react";

const error = () => {
  useEffect(() => {
    setTimeout(() => {
      Router.push("/");
    }, 2000);
  }, []);

  return (
    <>
      <h1>eroor page not found return to</h1>
      <a href="/">home page</a>
    </>
  );
};

export default error;
