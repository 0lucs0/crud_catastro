import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <dev className={styles.container}>
      <Head>
        <title>CRUD Catastro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>
        Bienvenido&#40;a&#41;
        <a
          href="http://localhost:3000/api/graphql"
          alt="Ir a GraphQL"
          target="_blank"
        >
          {" "}
          Ir a GraphQL
        </a>
      </h1>
    </dev>
  );
}
