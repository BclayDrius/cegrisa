import React, { useState, useEffect } from "react";

const Products = () => {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [colores, setColores] = useState([]);
  const [search, setSearch] = useState("");
  const [filtroCategoria, setFiltroCategoria] = useState("");
  const [filtroMarca, setFiltroMarca] = useState("");
  const [filtroColor, setFiltroColor] = useState("");
  const [orden, setOrden] = useState("");

  // --- Fetch productos ---
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/productos/");
        const data = await res.json();
        const items = data.results || data;
        setProductos(items);

        // Filtros dinámicos
        setCategorias([...new Set(items.map(p => p.categoria_nombre))]);
        setMarcas([...new Set(items.map(p => p.marca_nombre).filter(Boolean))]);
        setColores([...new Set(items.map(p => p.color_nombre).filter(Boolean))]);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };
    fetchProductos();
  }, []);

  // --- Filtrar y ordenar productos ---
  const productosFiltrados = productos
    .filter(p => 
      (!filtroCategoria || p.categoria_nombre === filtroCategoria) &&
      (!filtroMarca || p.marca_nombre === filtroMarca) &&
      (!filtroColor || p.color_nombre === filtroColor) &&
      (!search || p.nombre.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => {
      if (orden === "precio") return a.precio - b.precio;
      if (orden === "-precio") return b.precio - a.precio;
      if (orden === "nombre") return a.nombre.localeCompare(b.nombre);
      if (orden === "-nombre") return b.nombre.localeCompare(a.nombre);
      return 0;
    });

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Catálogo de Productos</h1>

      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar productos..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "0.5rem", width: "100%", marginBottom: "1rem" }}
      />

      {/* Filtros */}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        <select value={filtroCategoria} onChange={(e) => setFiltroCategoria(e.target.value)}>
          <option value="">Todas las categorías</option>
          {categorias.map((cat, i) => <option key={i} value={cat}>{cat}</option>)}
        </select>

        <select value={filtroMarca} onChange={(e) => setFiltroMarca(e.target.value)}>
          <option value="">Todas las marcas</option>
          {marcas.map((marca, i) => <option key={i} value={marca}>{marca}</option>)}
        </select>

        <select value={filtroColor} onChange={(e) => setFiltroColor(e.target.value)}>
          <option value="">Todos los colores</option>
          {colores.map((color, i) => <option key={i} value={color}>{color}</option>)}
        </select>

        <select value={orden} onChange={(e) => setOrden(e.target.value)}>
          <option value="">Ordenar por</option>
          <option value="precio">Precio: menor a mayor</option>
          <option value="-precio">Precio: mayor a menor</option>
          <option value="nombre">Nombre: A-Z</option>
          <option value="-nombre">Nombre: Z-A</option>
        </select>
      </div>

      {/* Lista de productos */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1rem"
      }}>
        {productosFiltrados.length === 0 && <p>No se encontraron productos.</p>}
        {productosFiltrados.map(prod => (
          <div key={prod.id} style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "1rem" }}>
            {prod.imagen && <img src={prod.imagen} alt={prod.nombre} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "6px" }}/>}
            <h3>{prod.nombre}</h3>
            <p>Precio: ${prod.precio}</p>
            <p>Categoría: {prod.categoria_nombre}</p>
            {prod.marca_nombre && <p>Marca: {prod.marca_nombre}</p>}
            {prod.color_nombre && <p>Color: {prod.color_nombre}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
