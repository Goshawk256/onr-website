import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo3.jpg";

import { CiSearch } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { PiUserCircle } from "react-icons/pi";
import ButtonsDrop from "../dropdown/header-buttons/ButtonsDrop";
import CardDrop from "../dropdown/header-cart/CartDrop";

function Header() {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });
  const [activeDropdown, setActiveDropdown] = useState(null);
  const buttonRefs = useRef({});

  const dropdownContents = {
    0: ["Cam Kesme Makinesi 1", "Cam Kesme Makinesi 2"],
    1: ["Saat Modeli 1", "Saat Modeli 2", "Saat Modeli 3"],
    2: ["Kaplama Tipi 1", "Kaplama Tipi 2"],
    3: ["Aksesuar 1", "Aksesuar 2", "Aksesuar 3"],
    4: ["Rova Modeli 1", "Rova Modeli 2"],
    5: ["Batarya 1", "Batarya 2", "Batarya 3"],
    user: ["Kullanıcı Girişi", "Bayi Girişi"],
  };

  const toggleDropdown = (buttonKey) => {
    const buttonRef = buttonRefs.current[buttonKey];
    if (buttonRef) {
      const rect = buttonRef.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left,
      });
    }

    setActiveDropdown(activeDropdown === buttonKey ? null : buttonKey);
    setDropdownOpen(activeDropdown !== buttonKey);
  };

  return (
    <div className="header-main">
      <img onClick={() => navigate("/")} src={logo} alt="" />
      <div className="header-content">
        <div className="header-search">
          <input type="text" className="search-input" placeholder="Ara..." />
          <button>
            <CiSearch />
          </button>
        </div>

        <div className="header-buttons">
          {[
            "Nano Cam Kesme Makinesi",
            "Akıllı Saat",
            "Arka Kaplama",
            "Aksesuar",
            "Rova Nano",
            "Batarya",
          ].map((item, index) => (
            <button
              key={index}
              ref={(el) => (buttonRefs.current[index] = el)}
              onClick={() => toggleDropdown(index)}
              className="header-button"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="header-user">
        <div
          className="cart-wrapper"
          onMouseEnter={() => setCartOpen(true)}
          onMouseLeave={() => setCartOpen(false)}
        >
          <button>
            <BsCart2 />
          </button>
          <CardDrop isOpen={isCartOpen} />
        </div>
        <span className="mobile-text">Biemtek GSM</span>
        <button
          ref={(el) => (buttonRefs.current["user"] = el)}
          className="user-button"
          onClick={() => toggleDropdown("user")}
        >
          <PiUserCircle />
        </button>
      </div>

      {isDropdownOpen && activeDropdown !== null && (
        <ButtonsDrop
          isOpen={isDropdownOpen}
          position={dropdownPosition}
          content={dropdownContents[activeDropdown]}
        />
      )}
    </div>
  );
}

export default Header;
