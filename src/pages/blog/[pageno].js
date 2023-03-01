import { useRouter } from "next/router";

const pageno = () => {
  const router = useRouter();
  const user = router.query.pageno;
  return (
    <>
      <h1>hello {user}</h1>
    </>
  );
};

export default pageno;
