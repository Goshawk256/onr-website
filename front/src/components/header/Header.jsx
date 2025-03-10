import React from "react";
import "./Header.css";
import logo from "../../assets/logo3.jpg";
import { FaRegCircleUser } from "react-icons/fa6";

function Header() {
  return (
    <div className="header-main">
      <img src={logo} alt="" />
      <div className="header-content">
        <button className="header-button">Kategori 1</button>
        <button className="header-button">Kategori 1</button>
        <button className="header-button">Kategori 1</button>
        <button className="header-button">Kategori 1</button>
        <button className="header-button">Kategori 1</button>
        <button className="header-button">Kategori 1</button>
        <button className="header-button">Kategori 1</button>
      </div>
      <div className="header-user">
        <button className="user-button">
          {" "}
          <FaRegCircleUser />
        </button>
      </div>
    </div>
  );
}

export default Header;
