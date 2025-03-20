import React from "react";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { RiShoppingCartLine } from "react-icons/ri";

import "./ProductCard.css";
import urun from "../../../assets/urun.png";
function ProductCard() {
  return (
    <div className="product-card-main">
      <div className="product-card-content">
        <img src={urun} alt="" />
        <div className="product-card-text">
          <div className="product-card-text-row">
            <span className="product-card-title">
              Rova Batarya Harika Bir ürün ve Bu Harika Ürünü Kaçırmayın
            </span>
          </div>
          <div className="product-card-text-row">
            <span className="product-card-price">100 ₺</span>
            <div className="increment-decrement">
              <button className="decrement-btn">
                <CiSquareMinus />
              </button>
              2
              <button className="increment-btn">
                <CiSquarePlus />
              </button>
            </div>
            <button className="add-to-cart-btn">
              <RiShoppingCartLine />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
