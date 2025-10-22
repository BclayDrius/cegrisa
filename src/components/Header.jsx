import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const navigation = [
  { name: 'Inicio', to: '/' },
  { name: 'Sobre Nosotros', to: '/about' },
  { name: 'Productos', to: '/products' },
  { name: 'Nuestras Tiendas', to: '/store' },
  { name: 'Catalogos', to: '/documents' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Global">
        <div className="brand">
          <Link to="/" className="logo">
            <img className="logo-mark" src="/images/logo.png" alt="CEGRISA logotipo" />
            <img className="logo-wordmark" src="/images/text.png" alt="CEGRISA texto" />
          </Link>
        </div>
        <button className="nav-toggle" aria-label="Abrir menú" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>
        <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
              end
            >
              {item.name}
            </NavLink>
          ))}
          <Link to="/contact" className="nav-cta" onClick={() => setMobileMenuOpen(false)}>Contacto →</Link>
        </div>
      </nav>
    </header>
  );
}
