import React from "react";
import "./Header.css";
import logo from "../../assets/logo3.jpg";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { PiBasketBold } from "react-icons/pi";

function Header() {
  return (
    <div className="header-main">
      <img src={logo} alt="" />
      <div className="header-content">
        <div className="header-search">
          <input type="text" className="search-input" placeholder="Ara..." />
          <button>
            {" "}
            <CiSearch />{" "}
          </button>
        </div>
        <button className="header-button">Nano Cam Kesme Makinesi</button>
        <button className="header-button">Akıllı Saat</button>
        <button className="header-button"> Arka Kaplama</button>
        <button className="header-button">Aksesuar</button>
        <button className="header-button">Rova Nano</button>
        <button className="header-button">Tüm Kategoriler</button>
      </div>
      <div className="header-user">
        <button>
          <PiBasketBold />
        </button>
        <button className="user-button">
          <FaRegCircleUser />
        </button>
      </div>
    </div>
  );
}

export default Header;
