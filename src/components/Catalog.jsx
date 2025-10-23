import { useNavigate } from "react-router-dom";
import "./Catalog.css";

export default function Categories() {
  const navigate = useNavigate();

  const cards = [
    { title: "Porcelanato", page: "/Documents", img: "https://i.pinimg.com/1200x/fa/2f/b0/fa2fb0e59ef65d90b41778642218a1a0.jpg" },
    { title: "Sanitarios", page: "/Documents", img: "https://i.pinimg.com/736x/3b/a3/6e/3ba36e39f0ca0a0104d45bdaf674cc65.jpg" },
    { title: "Tablones", page: "/Products", img: "https://i.pinimg.com/736x/ac/01/15/ac0115c4b587cb54d0241117e8c6573d.jpg" },
    { title: "Sinterizados", page: "/Products", img: "https://i.pinimg.com/1200x/79/eb/5a/79eb5ac9899b960b1e822dbce19dc73e.jpg" },
  ];

  return (
    <section className="categories">
      {cards.map((card, index) => (
        <div
          key={index}
          className="category-card"
          onClick={() => navigate(card.page)}
        >
          <img src={card.img} alt={card.title} />
          <div className="category-text">{card.title}</div>
        </div>
      ))}
    </section>
  );
}

