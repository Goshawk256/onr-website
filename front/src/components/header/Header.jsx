import React from "react";
import "./Header.css";
import logo from "../../assets/logo3.jpg";

function Header() {
  return (
    <div className="header-main">
      <div className="header-content">
        <img src={logo} alt="" />
        <button className="header-button">Kategori 1</button>
        <button className="header-button">Kategori 1</button>
        <button className="header-button">Kategori 1</button>
        <button className="header-button">Kategori 1</button>
        <button className="header-button">Kategori 1</button>
        <button className="header-button">Kategori 1</button>
        <button className="header-button">Kategori 1</button>
      </div>
    </div>
  );
}

export default Header;
