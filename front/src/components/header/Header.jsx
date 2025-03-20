import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo3.jpg";

import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { PiUserCircle } from "react-icons/pi";

function Header() {
  const navigate = useNavigate();

  const navigateTo = (navigationRoute) => {
    navigate(navigationRoute);
  };

  return (
    <div className="header-main">
      <img onClick={() => navigateTo("/")} src={logo} alt="" />
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
        <button className="header-button">Batarya</button>
      </div>
      <div className="header-user">
        <button>
          <BsCart2 />
        </button>
        <button className="user-button">
          <PiUserCircle />
        </button>
      </div>
    </div>
  );
}

export default Header;
