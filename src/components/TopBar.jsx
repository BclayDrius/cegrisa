import './TopBar.css';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-links">
          <a href="#">Nuestras tiendas</a>
          <span className="sep">|</span>
          <a href="/contact">Ayuda</a>
        </div>
        <div className="topbar-info">
          <span>Contactanos!</span>
        </div>
      </div>
    </div>
  );
}
