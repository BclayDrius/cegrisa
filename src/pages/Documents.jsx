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
  ];

  return (
    <div className="documents-container">
      <h1 className="documents-title">Catálogos CEGRISA</h1>

      <div className="documents-grid">
        {pdfs.map((pdf, index) => (
          <div key={index} className="document-card">
            <div className="document-preview">
              <iframe
                src={pdf.url}
                title={pdf.title}
                className="w-full h-full border-none"
              ></iframe>
            </div>

            <div className="document-info">
              <h2 className="document-title">{pdf.title}</h2>
              <div className="document-buttons">
                <a
                  href={pdf.url}
                  target="_blank"
                  rel="noreferrer"
                  className="document-btn open"
                >
                  Abrir
                </a>
                <a
                  href={pdf.url}
                  download={pdf.title + ".pdf"}
                  className="document-btn download"
                >
                  Descargar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
