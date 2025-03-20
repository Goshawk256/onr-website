import React from "react";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";

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
              <button className="decrement">
                <CiSquareMinus />
              </button>
              <button className="increment">
                <CiSquarePlus />
              </button>
            </div>
            <button>
              <span>Sepete Ekle</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
