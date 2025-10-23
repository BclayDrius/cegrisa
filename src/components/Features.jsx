import './Features.css';

const features = [
  {
    name: 'Amplia Variedad',
    description: 'Disponemos de cerámicas, mayólicas, grifería y sanitarios para todo tipo de obras y estilos.',
  },
  {
    name: 'Stock Permanente',
    description: 'Contamos con disponibilidad constante para abastecer tus proyectos sin demoras.',
  },
  {
    name: 'Asesoría Experta',
    description: 'Nuestro equipo te orienta en la elección de materiales según tu diseño y presupuesto.',
  },
  {
    name: 'Garantía y Confianza',
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
          {features.map((f) => (
            <div key={f.name} className="feature-card">
              <div className="feature-icon" />
              <h4 className="feature-title">{f.name}</h4>
              <p className="feature-desc muted">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
