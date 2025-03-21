import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./ButtonsDrop.css";
import { useNavigate } from "react-router-dom";

function ButtonsDrop({ isOpen, position, content }) {
  const navigate = useNavigate();
  const [leftPosition, setLeftPosition] = useState();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Ekran genişliğini kontrol et
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Ekran 768px'den küçükse mobil kabul et
    };

    // İlk renderda ekran boyutunu kontrol et
    handleResize();

    // Pencere boyutu değiştiğinde kontrol et
    window.addEventListener("resize", handleResize);

    // Temizleme fonksiyonu
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (position.left > 1350) {
      setLeftPosition(1300);
    }
    if (position.left < 1350) {
      setLeftPosition(position.left);
    }
  }, [position]);

  return (
    <motion.div
      className="dropdown-menu"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
      transition={{ duration: 0.3 }}
      style={{
        top: isMobile ? "100%" : `${position.top + 10}px`,
        left: isMobile ? "2.5%" : `${leftPosition}px`,
        transform: isMobile ? "translateX(-50%)" : "none",
        width: isMobile ? "95%" : "200px",
        position: "absolute",
      }}
    >
      {content.map((item, index) => (
        <button
          key={index}
          onClick={() =>
            navigate(`/${item.toLowerCase().replace(/\s+/g, "-")}`)
          }
        >
          {item}
        </button>
      ))}
    </motion.div>
  );
}

export default ButtonsDrop;
