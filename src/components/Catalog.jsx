import './Catalog.css';
import { productos } from '../data/productos';

function getRandomProducts(arr, count) {
  // Mezcla los productos
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  // Devuelve los primeros 'count'
  return shuffled.slice(0, count);
}

export default function Catalog() {
  // Obtenemos 6 productos aleatorios
  const randomProducts = getRandomProducts(productos, 6);

  return (
    <section className="catalog section">
      <div className="container">
        <h3 className="block-title">Catálogo de Productos</h3>
        <div className="catalog-grid">
          {randomProducts.map((p) => (
            <a key={p.id} href="#" className="catalog-tile">
              <div className="tile-media">
                <img src={p.imagen} alt={p.nombre} />
              </div>
              <div className="tile-label">{p.nombre}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

