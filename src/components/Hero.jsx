import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

export default function Hero() {
  const images = [
    {
      src: 'https://i.pinimg.com/1200x/0b/0f/7e/0b0f7ee3e1a18b36425f5807642c2cc1.jpg',
      alt: 'Trabajador soldando acero inoxidable',
    },
    {
      src: 'https://i.pinimg.com/1200x/4f/8b/07/4f8b078c85184ec3255e8e1be3d55b7b.jpg',
      alt: 'Cerámicas y mayólicas de calidad',
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Cambiar imagen cada 5 segundos de forma aleatoria
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(nextIndex);
    }, 5000); // cambia cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="container hero-grid">
        {/* Texto */}
        <div className="hero-copy">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Cercanos a Ti <br /> Comprometidos con Tu Hogar</h1>
            <p className="hero-sub">
              Más de 5 años ofreciendo calidad, confianza y precios accesibles en cerámicas y mayólicas
            </p>
            <div className="hero-actions">
              <a href="/contact" className="btn btn-primary">Solicitar Cotización</a>
              <a href="/products" className="btn-link">Ver Productos →</a>
            </div>
          </motion.div>
        </div>

        {/* Imagen dinámica */}
        <div className="hero-image">
          <AnimatePresence mode="wait">
            <motion.img
              key={images[currentImage].src}
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="hero-photo"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

