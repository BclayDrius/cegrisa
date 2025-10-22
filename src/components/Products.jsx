import { useState } from 'react';
import './Products.css';
import { productos } from '../data/productos';

const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'Porcelanato', name: 'Tablones' },
  { id: 'Mayolica', name: 'Porcelanato' },
  { id: 'Sinterizado', name: 'Sinterizado' },
];

const colorFilters = [
  { id: 'all', name: 'Todos los colores' },
  { id: 'Blanco', name: 'Blanco' },
  { id: 'Negro', name: 'Negro' },
  { id: 'Gris', name: 'Gris' },
];

// 🔹 Subcategorías que aparecerán cuando se seleccione “Porcelanato” (id: Mayolica)
const porcelanatoSubcategories = [
  { id: 'all', name: 'Todos los acabados' },
  { id: 'Mate', name: 'Mate' },
  { id: 'Vitrificado', name: 'Vitrificado' },
  { id: 'Otros', name: 'Otros' },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedColor, setSelectedColor] = useState('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const phoneNumber = '51973996742'; // WhatsApp destino

  const handleCotizar = (product) => {
    const message = 
      `Hola, estoy interesado en el producto *${product.nombre}*.\n\n` +
      `Descripción: ${product.descripcion}\n` +
      (product.color ? `Color: ${product.color}\n` : '') +
      (product.acabado ? `Acabado: ${product.acabado}\n` : '') +
      (product.forma ? `Forma: ${product.forma}\n` : '') +
      (product.dimensiones ? `Dimensiones: ${product.dimensiones}\n` : '') +
      `\n📸 Imagen del producto: ${window.location.origin}${product.imagen}\n\n` +
      `¿Podrían brindarme más información y una cotización, por favor?`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const filteredProducts = productos.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.categoria === selectedCategory;
    const matchesColor =
      selectedColor === 'all' || p.color?.toLowerCase() === selectedColor.toLowerCase();
    const matchesSubcategory =
      selectedSubcategory === 'all' || p.acabado?.toLowerCase() === selectedSubcategory.toLowerCase();
    const matchesSearch =
      p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.descripcion.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesColor && matchesSubcategory && matchesSearch;
  });

  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="text-center">
          <h2 className="title">Catálogo de Productos</h2>
          <p className="sub muted">
            Encuentra la línea ideal para tu espacio — calidad Cegrisa garantizada.
          </p>
        </div>

        {/* 🔍 Buscador */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar producto por nombre o descripción..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* 🧱 Categorías */}
        <div className="categories">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setSelectedColor('all');
                setSelectedSubcategory('all');
              }}
              className={`cat-pill ${selectedCategory === category.id ? 'active' : ''}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* 🎨 Subcategorías “Mate / Vitrificado” solo cuando el id es Mayolica (Porcelanato visible) */}
        {selectedCategory === 'Mayolica' && (
          <div className="subcategories">
            {porcelanatoSubcategories.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setSelectedSubcategory(sub.id)}
                className={`sub-pill ${selectedSubcategory === sub.id ? 'active' : ''}`}
              >
                {sub.name}
              </button>
            ))}
          </div>
        )}

        {/* 🎨 Filtro de colores: solo para Sinterizado */}
        {selectedCategory === 'Sinterizado' && (
          <div className="subcategories">
            {colorFilters.map((color) => (
              <button
                key={color.id}
                onClick={() => setSelectedColor(color.id)}
                className={`sub-pill ${selectedColor === color.id ? 'active' : ''}`}
              >
                {color.name}
              </button>
            ))}
          </div>
        )}

        {/* 🏷️ Productos */}
        <div className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.imagen} alt={product.nombre} />
                </div>

                <div className="product-info">
                  <h3>{product.nombre}</h3>
                  <p className="desc">{product.descripcion}</p>
                  <div className="details">
                    {product.color && <span>{product.color}</span>}
                    {product.acabado && <span>{product.acabado}</span>}
                    {product.forma && <span>{product.forma}</span>}
                    {product.dimensiones && (
                      <span className="dimensiones">{product.dimensiones}</span>
                    )}
                  </div>
                  <button
                    onClick={() => handleCotizar(product)}
                    className="cta"
                  >
                    Solicitar cotización
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No se encontraron productos que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
