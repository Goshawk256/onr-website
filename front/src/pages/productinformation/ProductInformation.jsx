import React from "react";
import "./ProductInformation.css";
import Header from "../../components/header/Header";
import urun from "../../assets/urun.png";

function ProductInformation() {
  return (
    <div className="product-information-main">
      <Header />
      <div className="product-information-content">
        <div className="product-information-card">
          <div className="product-information-card__title">
            <div className="product-information-icon">
              <a href="#">
                <i className="fa fa-arrow-left"></i>
              </a>
            </div>
            <h3>Rova Batarya</h3>
          </div>
          <div className="product-information-card__body">
            <div className="product-information-half">
              <div className="product-information-featured-text">
                <h1>Rova</h1>
                <p className="product-information-sub">Silikon Batarya</p>
                <p className="product-information-price">$210.00</p>
              </div>
              <div className="product-information-image">
                <img src={urun} alt="Rova Batarya" />
              </div>
            </div>
            <div className="product-information-half">
              <div className="product-information-description">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                  voluptatem nam pariatur voluptate perferendis, asperiores
                  aspernatur! Porro similique consequatur, nobis soluta minima,
                  quasi laboriosam hic cupiditate perferendis esse numquam
                  magni.
                </p>
              </div>
            </div>
          </div>
          <div className="product-information-card__footer">
            <div className="product-information-recommend">
              <p>Recommended by</p>
              <h3>Andrew Palmer</h3>
            </div>
            <div className="product-information-action">
              <button type="button">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInformation;
