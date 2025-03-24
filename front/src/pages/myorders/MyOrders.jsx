import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./MyOrders.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import { IoIosArrowForward } from "react-icons/io";

const orders = [
  {
    id: "ABC-6457325",
    status: "Yolda",
    date: "10 May 2021",
    items: [
      "Blue & pink Silk Saree",
      "Linen Kurta",
      "Printed black & white short kurti",
    ],
    moreItems: 2,
    price: "₺ 12,500",
    image: img1,
    address: "Istanbul, Turkey, 34000",
    estiminatedDelivery: "15 May 2021",
  },
  {
    id: "ABC-6457325",
    status: "Teslim Edildi",
    date: "10 May 2021",
    items: ["Two-seater wooden polished dining table"],
    price: "₺ 8,999",
    image: img2,
    address: "Istanbul, Turkey, 34000",
    estiminatedDelivery: "15 May 2021",
  },
  {
    id: "ABC-6457325",
    status: "Teslim Edildi",
    date: "10 May 2021",
    items: ["Two-seater wooden polished dining table"],
    price: "₺ 8,999",
    image: img3,
    address: "Istanbul, Turkey, 34000",
    estiminatedDelivery: "15 May 2021",
  },
];

function MyOrders() {
  const [expandedOrder, setExpandedOrder] = useState(null);

  const toggleExpand = (index) => {
    setExpandedOrder(expandedOrder === index ? null : index);
  };

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
                  order.status === "Teslim Edildi" ? "delivered" : "in-progress"
                }
              >
                {order.status}
              </span>
              <span className="order-date">{order.date}</span>
            </div>
            <div className="order-details">
              <img src={order.image} alt="Order Item" className="order-image" />
              <div className="order-info">
                <div className="order-info-first">
                  <p className="order-id">Order ID: {order.id}</p>
                  <p className="order-items">
                    {order.items.join(" | ")}
                    {order.moreItems ? ` & ${order.moreItems} more items` : ""}
                  </p>
                </div>
                <p className="order-price">{order.price}</p>
              </div>
              <div className="expand-order">
                <button onClick={() => toggleExpand(index)}>
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
            <AnimatePresence initial={false}>
              {expandedOrder === index && (
                <motion.div
                  className="order-extra-details"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "200px", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="address-details">
                    {/* Teslimat Detayları */}
                    <motion.div
                      className="address-details-row"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.2,
                      }}
                    >
                      <span className="address-details-row-header">
                        Teslimat Detayları:
                      </span>
                      <span className="address-details-row-content">
                        Sipariş Tarihi: 19.02.2024 <br />
                        <br />
                        Sipariş Durumu: Onay Bekliyor <br />
                        <br />
                        Tahmini Teslimat Tarihi: 24.02.2024
                      </span>
                    </motion.div>

                    {/* Teslimat Adresi */}
                    <motion.div
                      className="address-details-row"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.4,
                      }}
                    >
                      <span className="address-details-row-header">
                        Teslimat Adresi:
                      </span>
                      <span className="address-details-row-content">
                        Adres Başlığı: Ev Adresi <br />
                        <br />
                        Adres: Türkiye | Istanbul <br />
                        <br /> Maltepe | İnönü Mah. <br />
                        <br /> Cansu Apt. | No: 24
                      </span>
                    </motion.div>

                    {/* İletişim Bilgileri */}
                    <motion.div
                      className="address-details-row"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.6,
                      }}
                    >
                      <span className="address-details-row-header">
                        İletişim Bilgileri:
                      </span>
                      <span className="address-details-row-content">
                        Ad Soyad: Ali Veli <br />
                        <br />
                        Telefon: +90 532 123 45 67 <br />
                        <br />
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default MyOrders;
