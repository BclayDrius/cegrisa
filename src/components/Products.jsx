import { useState } from 'react';
import { motion } from 'framer-motion';
import './Products.css';
import { productos } from '../data/productos'; // 👈 importa tus datos

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'Baños', name: 'Baños' },
  { id: 'Cocina', name: 'Cocina' },
  { id: 'Accesorios', name: 'Accesorios' },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts =
    selectedCategory === 'all'
      ? productos
      : productos.filter(
          (p) => p.categoria === selectedCategory
        );

  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '32px' }}>
          <h2 className="title">Catálogo de Productos</h2>
          <p className="sub muted">
            Descubre nuestra amplia gama de productos de acero inoxidable Cegrisa
          </p>
        </div>

        <div className="categories">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`cat-pill ${
                selectedCategory === category.id ? 'active' : ''
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="product-card shadow rounded"
            >
              <div className="product-media">
                <img src={product.imagen} alt={product.nombre} />
              </div>
              <div className="product-body">
                <h3 className="product-title">{product.nombre}</h3>
                <p className="product-desc muted">
                  {product.descripcion}
                </p>
                <p className="product-price">S/ {product.precio.toFixed(2)}</p>
                <p className="product-meta text-sm text-gray-500">
                  {product.color} • {product.acabado} • {product.forma}
                </p>
                <div className="product-actions">
                  <a href="/contact" className="btn-link">
                    Solicitar cotización →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
