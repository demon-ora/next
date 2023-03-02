import React from "react";
import Link from "next/link";
import styles from "../../styles/nav.module.css";

const Nav = () => {
  return (
    <>
      <nav className={styles.box}>
        <Link href="/" className={styles.link}>
          here
        </Link>
        <Link href="/home" className={styles.link}>
          home
        </Link>
        <Link href="/blog/bloge" className={styles.link}>
          blog
        </Link>
        <Link href="/about" className={styles.link}>
          about
        </Link>
        {/* <Link href="/blog/pageno" className={styles.link}>
          pageno
        </Link> */}
      </nav>
    </>
  );
};

export default Nav;
