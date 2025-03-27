import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa";
import "./SliderComponent.css";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
const items = [
  {
    id: 1,
    img: img3,
    title: "NIKE D.01",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    img: img2,
    title: "NIKE D.02",
    desc: "Ipsum facere ipsa blanditiis quidem dignissimos enim quam corrupti.",
  },
  {
    id: 3,
    img: img1,
    title: "NIKE D.03",
    desc: "Praesentium ipsam assumenda?",
  },
  {
    id: 4,
    img: img4,
    title: "NIKE D.03",
    desc: "Praesentium ipsam assumenda?",
  },
];

function SliderComponent() {
  const [active, setActive] = useState(0);
  const lastPosition = items.length - 1;

  useEffect(() => {
    const autoPlay = setInterval(() => {
      setActive((prev) => (prev + 1 > lastPosition ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(autoPlay);
  }, [active]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
  };

  return (
    <section className="carousel">
      <div className="list">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`item ${index === active ? "active" : ""}`}
          >
            <figure>
              <img src={item.img} alt={item.title} />
            </figure>
            <div className="content">
              <p className="category">Spor Ayakkabılar</p>
              <h2>{item.title}</h2>
              <p className="description">{item.desc}</p>
              <div className="more">
                <button>Sepete Ekle</button>
                <button>
                  <FaPlay /> Daha Fazla
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button
          onClick={() => setActive(active - 1 < 0 ? lastPosition : active - 1)}
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={() => setActive(active + 1 > lastPosition ? 0 : active + 1)}
        >
          <FaChevronRight />
        </button>
      </div>
      <div className="indicators">
        <ul>
          {items.map((_, index) => (
            <li
              key={index}
              className={index === active ? "active" : ""}
              onClick={() => setActive(index)}
            ></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default SliderComponent;
