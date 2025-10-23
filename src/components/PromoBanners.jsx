import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // para navegación
import './PromoBanners.css';

export default function Catalog() {
  const images = [
    'https://i.pinimg.com/1200x/11/82/22/118222111d00f289e1a979d0fb153349.jpg',
  ];

  const [current, setCurrent] = useState(0);
  const total = images.length;

  const navigate = useNavigate();

  // cambio automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(interval);
  }, [total]);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);

  return (
    <section className="slider">
      {images.map((url, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${url})` }}
        >
          {/* Texto sobre la imagen */}
          {index === current && (
            <div className="slide-content">
              <h2>Los diseños más modernos del mundo</h2>
              <button
                className="discover-btn"
                onClick={() => navigate('/products')}
              >
                Descúbrelo más
              </button>
            </div>
          )}
        </div>
      ))}

      <button className="slider-btn slider-prev" onClick={prevSlide}>❮</button>
      <button className="slider-btn slider-next" onClick={nextSlide}>❯</button>

      <div className="slider-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`slider-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
          ></span>
        ))}
      </div>
    </section>
  );
}
