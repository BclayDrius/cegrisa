import { motion } from "framer-motion";
import './Features.css';

const features = [
  {
    name: '_Amplia Variedad_',
    description: 'Disponemos de cerámicas, mayólicas, grifería y sanitarios para todo tipo de obras y estilos.',
  },
  {
    name: '_Stock Permanente_',
    description: 'Contamos con disponibilidad constante para abastecer tus proyectos sin demoras.',
  },
  {
    name: '_Asesoría Experta_',
    description: 'Nuestro equipo te orienta en la elección de materiales según tu diseño y presupuesto.',
  },
  {
    name: '_Garantía y Confianza_',
    description: 'Todos nuestros productos cuentan con garantía de calidad respaldada por Cegrisa.',
  },
];

export default function Features() {
  return (
    <section className="features section" id="about">
      <div className="container">
        <div className="features-head text-center">
          <h2 className="eyebrow">Sobre Nosotros</h2>
          <h3 className="title">Soluciones en Cerámicas y Mayólicas</h3>
          <p className="sub muted">
            Más de 25 años ofreciendo calidad, confianza y precios accesibles en revestimientos, sanitarios y accesorios para tu hogar y tus proyectos.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, index) => (
            <motion.div
              key={f.name}
              className="feature-card"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0,0,0,0.12)" }}
            >
              <div className="feature-icon">{index + 1}</div>
              <h4 className="feature-title">{f.name}</h4>
              <p className="feature-desc muted">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
