import './PromoBanners.css';

export default function PromoBanners() {
  return (
    <section className="promos section">
      <div className="container promos-grid">
        <a className="promo-card left" href="/products">
          <div className="promo-content">
            <span className="promo-kicker">Lo ultimo en Diseños</span>
            <h4 className="promo-title">Pregunta por los precios!</h4>
          </div>
        </a>
        <a className="promo-card right" href="/products">
          <div className="promo-content">
            <span className="promo-kicker">Colecciones</span>
            <h4 className="promo-title">Selección de la mejor calidad y diseño</h4>
            <span className="promo-cta">Ver más</span>
          </div>
        </a>
      </div>
    </section>
  );
}
