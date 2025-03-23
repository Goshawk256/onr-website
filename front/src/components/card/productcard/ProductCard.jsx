import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";

import shoe1 from "../../../assets/shoes1.png";
import shoe2 from "../../../assets/shoes2.png";
import shoe3 from "../../../assets/shoes3.png";

import { RiShoppingCartLine } from "react-icons/ri";
import { FaRegEye } from "react-icons/fa";

const ProductCard = () => {
  const [selectedShoe, setSelectedShoe] = useState(shoe1);
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  const handleShoeChange = (shoe) => {
    setAnimate(true);
    setSelectedShoe(shoe);

    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  };

  return (
    <div className="product-container">
      <div className="thumb">
        <ul>
          <li onClick={() => handleShoeChange(shoe1)}>
            <img src={shoe1} alt="Shoe 1" />
          </li>
          <li onClick={() => handleShoeChange(shoe2)}>
            <img src={shoe2} alt="Shoe 2" />
          </li>
          <li onClick={() => handleShoeChange(shoe3)}>
            <img src={shoe3} alt="Shoe 3" />
          </li>
        </ul>
      </div>
      <label className="container-like">
        <input type="checkbox" />
        <svg
          id="Layer_1"
          version="1.0"
          viewBox="0 0 24 24"
          xmlSpace="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path>
        </svg>
      </label>
      <div className="imgBox">
        <h2>Nike Air Zoom</h2>
        <img
          onClick={() => handleShoeChange(selectedShoe)}
          src={selectedShoe}
          alt="Selected Shoe"
          className={`shoes ${animate ? "animate" : ""}`}
        />
        <ul className="sizes">
          <span>Beden: </span>
          <li>41</li>
          <li>42</li>
          <li>43</li>
          <li>44</li>
        </ul>
        <div className="shoe-price">
          <span>Fiyat: </span> <b>5499 ₺</b>
        </div>
        <a href="#" className="btn">
          <RiShoppingCartLine />
        </a>
        <a className="btn-incele" href="/productinformation">
          <FaRegEye />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
