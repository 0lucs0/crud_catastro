import Head from "next/head";
import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import client from "../pages/api/_app";

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Predios {
        predios {
          id_predio
          pre_avaluo
          pre_nombre
          pre_departamento
          pre_municipio
          id_pre_propietario
          id_pre_construccion
          id_pre_terreno
        }
      }
    `,
  });

  return {
    props: {
      predios: data.predios,
    },
  };
}

export default function Home({ predios }) {
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

      <div className={styles.grid}>
        {predios.map((predio) => (
          <div key={predios.id_predio} className={styles.card}>
            <h3>
              <a
                href="#pre_avaluo"
                aria-hidden="true"
                class="aal_anchor"
                id="pre_avaluo"
              >
                <svg
                  aria-hidden="true"
                  class="aal_svg"
                  height="16"
                  version="1.1"
                  viewBox="0 0 16 16"
                  width="16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
                  ></path>
                </svg>
              </a>
              Nombre del Predio: {predio.pre_nombre}
            </h3>
            <p>
              Departamento: {predio.pre_departamento} 
              <br/>
              Municipio: {predio.pre_municipio}{" "}
              <br/>
              Avaluo: ${predio.pre_avaluo}
            </p>
          </div>
        ))}
      </div>
    </dev>
  );
}
