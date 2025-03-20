import React from "react";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import urun from "../../../assets/urun.png";
function ProductCard() {
  const navigate = useNavigate();
  const navigateTo = (navigationRoute) => {
    navigate(navigationRoute);
  };
  return (
    <div className="product-card-main">
      <div className="product-card-content">
        <img
          onClick={() => navigateTo("/productinformation")}
          src={urun}
          alt=""
        />
        <div className="product-card-text">
          <div className="product-card-text-row">
            <span className="product-card-title">
              Rova Batarya Harika Bir ürün ve Bu Harika Ürünü Kaçırmayın
            </span>
          </div>
          <div className="product-card-text-row">
            <span className="product-card-price">5499,99 ₺</span>
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
              <BsCart2 />
            </button>
          </div>
        </div>
        <button className="like-button">
          <FaHeart />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
