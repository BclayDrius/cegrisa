import { useState } from 'react';
import { motion } from 'framer-motion';
import './Products.css';

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'industrial', name: 'Industrial' },
  { id: 'comercial', name: 'Comercial' },
  { id: 'hogar', name: 'Hogar' },
];

const products = [
  {
    id: 1,
    name: 'Muebles de Cocina',
    category: 'hogar',
    imageSrc: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Muebles de cocina en acero inoxidable a medida.',
  },
  {
    id: 2,
    name: 'Equipo Industrial',
    category: 'industrial',
    imageSrc: 'https://images.unsplash.com/photo-1581093057427-5375d6b6d1b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Equipo industrial en acero inoxidable para procesos alimenticios.',
  },
  {
    id: 3,
    name: 'Mobiliario Comercial',
    category: 'comercial',
    imageSrc: 'https://images.unsplash.com/photo-1578474849013-8ea529355738?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Mobiliario en acero inoxidable para restaurantes y comercios.',
  },
  {
    id: 4,
    name: 'Barandales',
    category: 'hogar',
    imageSrc: 'https://images.unsplash.com/photo-1583845112209-5eb9279986f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    description: 'Barandales de acero inoxidable para interiores y exteriores.',
  },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="text-center" style={{marginBottom: '32px'}}>
          <h2 className="title">Nuestros Productos</h2>
          <p className="sub muted">Descubre nuestra amplia gama de productos en acero inoxidable</p>
        </div>

        <div className="categories">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`cat-pill ${selectedCategory === category.id ? 'active' : ''}`}
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
                <img src={product.imageSrc} alt={product.name} />
              </div>
              <div className="product-body">
                <h3 className="product-title">{product.name}</h3>
                <p className="product-desc muted">{product.description}</p>
                <div className="product-actions">
                  <a href="/contact" className="btn-link">Solicitar cotización →</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
