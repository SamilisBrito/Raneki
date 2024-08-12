import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Produtos.module.css";
import Head from "./Head";

const Produtos = () => {
  const [dados, setDados] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    url();
  }, []);

  async function url() {
    try {
      setLoading(true);
      const response = await (
        await fetch(`https://ranekapi.origamid.dev/json/api/produto`)
      ).json();
      setDados(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Head title="Produtos" descripition="descrição de Produtos" />
      {loading && <div className="loading"></div>}
      <div className={`${styles.content} ${"animeLeft"}`}>
        {dados &&
          dados.map((produto) => (
            <Link
              style={{ textDecoration: "none" }}
              to={`produto/${produto.id}`}
              key={produto.id}
            >
              <img
                className={styles.img}
                src={produto?.fotos[0].src}
                alt={produto?.fotos[0].alt}
              />
              <h2 className={styles.title}>{produto.nome}</h2>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Produtos;
