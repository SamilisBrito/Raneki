import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./Produto.module.css";
import Head from "./Head";

const Produto = () => {
  const [produto, setProduto] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function produto() {
      try {
        const response = await (
          await fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
        ).json();
        setProduto(response);
      } catch (error) {
        console.error(error);
      }
    }
    produto();
  }, []);

  if (produto) {
    return (
      <>
        <Head title={produto.nome} descripition="descrição de Produto" />
        <div className={`${styles.content} ${"animeLeft"}`}>
          <figure className={styles.figures}>
            {produto.fotos.map((foto) => (
              <img
                key={foto.src}
                className={styles.img}
                src={foto.src}
                alt={foto.title}
              />
            ))}
          </figure>
          <div className={styles.texto}>
            <h2>{produto.nome}</h2>
            <span>R$ {produto.preco}</span>
            <p>{produto.descricao}</p>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default Produto;
