import React from "react";

// ✅ Documents.jsx
// Muestra tus catálogos PDF directamente desde el servidor (Vercel)

export default function Documents() {
  const pdfs = [
    {
      title: "CATÁLOGO SANITARIOS CEGRISA",
      url: "https://cegrisa.vercel.app/catalogo-sanitarios-cegrisa.pdf",
    },
    {
      title: "CATÁLOGO PORCELANATOS CEGRISA",
      url: "https://cegrisa.vercel.app/catalogo-porcelanatos-cegrisa.pdf",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 flex flex-col items-center">
      <h1 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
        Catálogos CEGRISA
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
        {pdfs.map((pdf, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200"
          >
            <div className="h-[70vh] w-full bg-gray-100">
              <iframe
                src={pdf.url}
                title={pdf.title}
                className="w-full h-full border-none"
                allow="fullscreen"
              ></iframe>
            </div>

            <div className="p-4 flex flex-col items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800 mb-3 text-center">
                {pdf.title}
              </h2>
              <div className="flex gap-3">
                <a
                  href={pdf.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                >
                  Abrir en nueva pestaña
                </a>
                <a
                  href={pdf.url}
                  download={pdf.title + '.pdf'}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
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
