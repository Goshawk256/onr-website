import React from "react";
import "./ProductList.css";
import Header from "../../components/header/Header";
import ProductCard from "../../components/card/productcard/ProductCard";
import ProductArea from "../../components/productarea/ProductArea";
import Footer from "../../components/footer/Footer";
import "./ProductList.css";
function ProductList() {
  return (
    <div className="productlist-main">
      <Header />
      <div className="productlist-content">
        <span className="category-show-area"> Kategori {" > "} Batarya</span>
        <ProductArea />
        <div className="productlist-navigate-buttons">
          <button>Geri</button>1<button>İleri</button>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ProductList;
