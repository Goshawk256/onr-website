import React, { useState } from "react";
import "./ProductCard.css";
import shoe1 from "../../../assets/shoes1.png";
import shoe2 from "../../../assets/shoes2.png";
import shoe3 from "../../../assets/shoes3.png";

const ProductCard = () => {
  const [selectedShoe, setSelectedShoe] = useState(shoe1);

  return (
    <div className="product-container">
      <div className="thumb">
        <ul>
          <li onMouseOver={() => setSelectedShoe(shoe1)}>
            <img src={shoe1} alt="Shoe 1" />
          </li>
          <li onMouseOver={() => setSelectedShoe(shoe2)}>
            <img src={shoe2} alt="Shoe 2" />
          </li>
          <li onMouseOver={() => setSelectedShoe(shoe3)}>
            <img src={shoe3} alt="Shoe 3" />
          </li>
        </ul>
      </div>
      <div className="imgBox">
        <h2>Nike Air Zoom</h2>
        <img src={selectedShoe} alt="Selected Shoe" className="shoes" />
        <ul className="sizes">
          <span>Beden: </span>
          <li>41</li>
          <li>42</li>
          <li>43</li>
          <li>44</li>
        </ul>
        <div className="shoe-price">
          <span>Fiyat: </span> 5499 TL
        </div>
        <a href="#" className="btn">
          Sepete Ekle
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
