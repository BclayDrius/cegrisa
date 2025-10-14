import { MapPin, Phone } from 'lucide-react';
import './Store.css';

export default function Store() {
  return (
    <section className="store section">
      <div className="container">
        <h2 className="store-title">Nuestras Tiendas</h2>
        <p className="store-sub">Visítanos en nuestras sedes en Surquillo, Lima.</p>

        <div className="store-grid">
          {/* Sede 1 */}
          <div className="store-card">
            <MapPin size={22} className="store-icon" />
            <h3 className="store-name">Sucursal Principal</h3>
            <p className="store-address">Av. Tomás Marsano 831 - Surquillo, Lima</p>
            <p className="store-phone"><Phone size={16} />  +51 987 654 321</p>

            <iframe
              title="Mapa Marsano 831"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.301263230361!2d-77.019842!3d-12.117838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c81a5d4b8f05%3A0xd123456789abcdef!2sAv.%20Tom%C3%A1s%20Marsano%20831%2C%20Surquillo!5e0!3m2!1ses-419!2spe!4v1697042000000!5m2!1ses-419!2spe"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Sede 2 */}
          <div className="store-card">
            <MapPin size={22} className="store-icon" />
            <h3 className="store-name">Sucursal Secundaria</h3>
            <p className="store-address">Av. Tomás Marsano 849 - Surquillo, Lima</p>
            <p className="store-phone"><Phone size={16} />  +51 987 654 321</p>

            <iframe
              title="Mapa Marsano 849"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.3000000000!2d-77.019000!3d-12.117000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c81a5d4b8f05%3A0xabcdef123456789!2sAv.%20Tom%C3%A1s%20Marsano%20849%2C%20Surquillo!5e0!3m2!1ses-419!2spe!4v1697042500000!5m2!1ses-419!2spe"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
