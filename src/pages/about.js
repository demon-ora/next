import React from "react";
import Image from "next/image";

const about = () => {
  return (
    <>
      <Image src="/fate.webp" height="300" width="300" />

      <Image
        src="https://dummyimage.com/600x400/000/fff"
        height="300"
        width="300"
      />
    </>
  );
};

export default about;
