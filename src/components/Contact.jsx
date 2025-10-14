import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // número destino sin el "+"
    const phoneNumber = "51973996742";

    // mensaje formateado
    const text = `¡Hola! Soy ${formData.name}.\n\n` +
                 `Mi correo: ${formData.email}\n` +
                 `Teléfono: ${formData.phone}\n\n` +
                 `Mensaje: ${formData.message}`;

    // codificar mensaje para URL
    const encodedText = encodeURIComponent(text);

    // crear enlace de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // abrir WhatsApp en nueva pestaña
    window.open(whatsappUrl, '_blank');

    // limpiar formulario
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="title">Contáctanos</h2>
          <p className="sub muted">¿Tienes alguna pregunta? Escríbenos y te responderemos a la brevedad.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-form">
            <form onSubmit={handleSubmit} className="form">
              <label htmlFor="name" className="label">Nombre completo</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="input"
              />

              <label htmlFor="email" className="label">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="input"
              />

              <label htmlFor="phone" className="label">Teléfono</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input"
              />

              <label htmlFor="message" className="label">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                value={formData.message}
                onChange={handleChange}
                className="textarea"
              />

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Enviar mensaje por WhatsApp
              </button>
            </form>
          </div>

          <div className="contact-info">
            <h3 className="info-title">Información de contacto</h3>
            <ul className="info-list">
              <li>
                <strong>Dirección:</strong><br />
                AV TOMÁS MARSANO 831 - SURQUILLO Y AV TOMÁS MARSANO 849 - SURQUILLO
              </li>
              <li>
                <strong>Teléfono:</strong> <a href="tel:+51973996742">+51 973 996 742</a>
              </li>
              <li>
                <strong>Email:</strong> <a href="mailto:cegrisaimport@gmail.com">cegrisaimport@gmail.com</a>
              </li>
            </ul>

            <div className="schedule">
              <h3 className="info-title">Horario de atención</h3>
              <ul>
                <li><span>Lunes a Viernes</span><strong>9:00 AM - 6:00 PM</strong></li>
                <li><span>Sábado</span><strong>9:00 AM - 2:00 PM</strong></li>
                <li><span>Domingo</span><strong>Cerrado</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
