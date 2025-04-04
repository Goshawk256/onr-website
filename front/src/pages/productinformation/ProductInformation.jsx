import React from "react";
import "./ProductInformation.css";
import Header from "../../components/header/Header";
import urun from "../../assets/1.png";
import urun2 from "../../assets/2.png";
import urun3 from "../../assets/3.png";
import { FaArrowLeft } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";

function ProductInformation() {
  return (
    <div className="product-information-main">
      <Header />
      <div className="product-information-content">
        <div className="product-information-card">
          <div className="product-information-card__title">
            <div className="product-information-icon">
              <a href="/">
                <FaArrowLeft />
              </a>
            </div>
            <h3>Nike Air Zoom</h3>
          </div>
          <div className="product-information-card__body">
            <div className="product-information-half">
              <div className="product-information-featured-text">
                <h1>Nike</h1>
                <p className="product-information-sub">Nike Air Zoom</p>
                <p className="product-information-price">$210.00</p>
              </div>
              <div className="product-information-image">
                <img src={urun} alt="product photo" />
                <img src={urun2} alt="product photo" />
                <img src={urun3} alt="product photo" />
              </div>
            </div>
            <div className="product-information-half">
              <div className="product-information-description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  voluptatem nam pariatur voluptate perferendis, asperiores
                  aspernatur! Porro similique consequatur, nobis soluta minima,
                  quasi laboriosam hic cupiditate perferendis esse numquam
                  magni. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit. Autem rem ad eius, eos accusantium qui facere. Odio odit
                  rem suscipit dolorem laborum sed quae illo asperiores
                  voluptatum, nobis id sequi!
                </p>
                <br />
                <span>
                  <span style={{ color: "#fff", fontWeight: "800" }}>
                    Stok Durumu:{" "}
                  </span>
                  <p>Stokta Var</p>
                  <br />
                  <span style={{ color: "#fff", fontWeight: "800" }}>
                    Fiyat:{" "}
                  </span>
                  <p>$210.00</p>
                  <br />
                  <span style={{ color: "#fff", fontWeight: "800" }}>
                    Adet:{" "}
                  </span>
                  <br />
                  <div className="product-information-quantity">
                    <button className="info-decrement-btn">
                      <FaMinus />
                    </button>
                    2
                    <button className="info-increment-btn">
                      <FaPlus />
                    </button>
                    <div className="product-information-action">
                      <button type="button">Sepete Ekle</button>
                      <button type="button">Satın Al</button>
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>

          <div className="product-information-card__footer">
            <div className="product-information-recommend"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInformation;
