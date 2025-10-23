import './About.css';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <header className="about-header">
          <h1>Sobre Nosotros</h1>
          <p>
            Más de 25 años ofreciendo calidad, confianza y precios accesibles en cerámicas y mayólicas.
          </p>
        </header>

        <section className="about-intro">
          <p>
            En <strong>Cegrisa</strong> somos una empresa <strong>persona natural</strong> con veinticinco años de experiencia en el rubro.
            Nuestro propósito es acercar a las familias y constructores productos de calidad a precios justos,
            brindando una atención cercana que nos diferencia de las grandes cadenas.
          </p>
        </section>

        <section className="about-grid">
          <div>
            <h2>Misión</h2>
            <p>
              Brindar productos de cerámica a precios accesibles, atendiendo con compromiso a nuestros clientes
              y apoyándolos en el desarrollo de sus hogares y obras con un servicio personalizado.
            </p>
          </div>
          <div>
            <h2>Visión</h2>
            <p>
              Ser reconocidos en Lima como la opción líder y accesible en la venta de mayólicas,
              destacando por la confianza, la calidad y la atención personalizada.
            </p>
          </div>
        </section>

        <section className="about-values">
          <h2>Nuestros Valores</h2>
          <ul>
            {['Accesibilidad', 'Calidad', 'Compromiso', 'Respeto', 'Honestidad'].map((valor) => (
              <li key={valor}>{valor}</li>
            ))}
          </ul>
        </section>

        <section className="about-history">
          <h2>Nuestra Historia</h2>
          <p>
            Cegrisa nació gracias a la motivación de su fundadora, quien trabajó durante años en un negocio similar
            en otra provincia. Su experiencia y deseo de ofrecer precios más accesibles en Lima la inspiraron a
            crear un emprendimiento propio, comprometido con la calidad, la confianza y el servicio cercano.
          </p>
        </section>
      </div>
    </section>
  );
}
