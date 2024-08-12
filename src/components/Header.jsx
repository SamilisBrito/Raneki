import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink className={styles.link} to="/" end>
          Produtos
        </NavLink>
        <NavLink className={styles.link} to="contato">
          Contato
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
