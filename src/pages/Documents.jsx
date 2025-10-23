import React from "react";
import "./Documents.css";

export default function Documents() {
  const pdfs = [
    {
      title: "CATÁLOGO SANITARIOS CEGRISA",
      url: "/catalogo-sanitarios-cegrisa.pdf",
    },
    {
      title: "CATÁLOGO PORCELANATOS CEGRISA",
      url: "/catalogo-porcelanatos-cegrisa.pdf",
    },
  
     {
      title: "CATALOGO SPC CEGRISA",
      url: "/spc_cegrisa.pdf",
    },
  ];

  return (
    <div className="documents-container">
      <h1 className="documents-title">Catálogos CEGRISA</h1>

      <div className="pdf-grid">
        {pdfs.map((pdf, index) => (
          <div key={index} className="pdf-card">
            <div className="pdf-viewer-wrapper">
              <iframe
                src={pdf.url}
                title={pdf.title}
                className="pdf-viewer"
                allow="fullscreen"
              ></iframe>
            </div>

            <h2 className="pdf-title">{pdf.title}</h2>
            <div className="pdf-buttons">
              <a
                href={pdf.url}
                target="_blank"
                rel="noreferrer"
                className="pdf-button open"
              >
                Abrir
              </a>
              <a
                href={pdf.url}
                download={pdf.title + ".pdf"}
                className="pdf-button download"
              >
                Descargar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
