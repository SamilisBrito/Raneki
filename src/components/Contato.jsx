import React from "react";
import contato from "../img/contato.jpg";
import style from "./Contato.module.css";
import Head from "./Head";

const Contato = () => {
  return (
    <>
      <Head title="Contato" descripition="descriçao de contato" />
      <div className={`${style.content} ${"animeLeft"}`}>
        <img className={style.img} src={contato} alt="máquina de escrever" />
        <div>
          <h2>Entre em contato.</h2>
          <ul className={style.ul}>
            <li>samilisbrito@gmail.com</li>
            <li>9199999-9999</li>
            <li>Rua alí perto, 37.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contato;
