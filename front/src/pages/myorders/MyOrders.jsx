import React from "react";
import "./MyOrders.css";
import Header from "../../components/header/Header";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
const orders = [
  {
    id: "ABC-6457325",
    status: "In progress",
    date: "10 May 2021",
    items: [
      "Blue & pink Silk Saree",
      "Linen Kurta",
      "Printed black & white short kurti",
    ],
    moreItems: 2,
    price: "₹ 12,500",
    image: img1,
  },
  {
    id: "ABC-6457325",
    status: "Delivered",
    date: "10 May 2021",
    items: ["Two-seater wooden polished dining table"],
    price: "₹ 8,999",
    image: img2,
  },
  {
    id: "ABC-6457325",
    status: "Delivered",
    date: "10 May 2021",
    items: ["Two-seater wooden polished dining table"],
    price: "₹ 8,999",
    image: img3,
  },
];

function MyOrders() {
  return (
    <div className="main-myorders">
      <Header />
      <span className="my-orders-header">Ev {">"} Siparişlerim</span>
      <div className="myorders-content">
        {orders.map((order, index) => (
          <div className="order-card" key={index}>
            <div className="order-status">
              <span
                className={
                  order.status === "Delivered" ? "delivered" : "in-progress"
                }
              >
                {order.status}
              </span>
              <span className="order-date">{order.date}</span>
            </div>
            <div className="order-details">
              <img src={order.image} alt="Order Item" className="order-image" />
              <div className="order-info">
                <p className="order-id">Order ID: {order.id}</p>
                <p className="order-items">
                  {order.items.join(" | ")}
                  {order.moreItems ? ` & ${order.moreItems} more items` : ""}
                </p>
                <p className="order-price">{order.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyOrders;
