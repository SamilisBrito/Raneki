import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    backgroundColor: "#D7D7D7",
  };

  const baseStyle = {
    padding: "10px",
    backgroundColor: "#ECECEC",
    textDecoration: "none",
    color: "#202020",
    borderRadius: "4px",
    fontWeight: "500",
  };

  return (
    <header style={{marginBottom: '20px'}}>
      <nav style={{ display: "flex", gap: "20px" }}>
        <NavLink
          to="/"
          end
          style={({ isActive }) =>
            isActive ? { ...baseStyle, ...activeStyle } : baseStyle
          }
        >
          Produtos
        </NavLink>
        <NavLink
          to="contato"
          style={({ isActive }) =>
            isActive ? { ...baseStyle, ...activeStyle } : baseStyle
          }
        >
          Contato
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
